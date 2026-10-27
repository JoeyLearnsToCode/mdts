---
title: Non-Markdown Files (Source Code Viewer)
description: Requirement, design and implementation notes for serving non-Markdown files through mdts
category: Documentation
tags:
  - glob
  - source code
  - design
  - implementation
---

# 非文档文件支持（源码视图）

## 1. 需求

### 背景

把 mdts 当作仓库内 `docs/wiki` 的本地浏览器时，文档天然会用相对路径引用仓库里的代码：

```markdown
配置装载见 [conf.go](../../internal/conf/conf.go)
```

改造前 mdts 只认 `.md` / `.markdown`：这类文件既不会出现在文件树里，点击链接也会被当成"目录"渲染成空页。

### 目标

1. `--glob` / `-g` 匹配到的**非文档文件**（`.go` / `.ts` / `.py` …）也要出现在左侧 File Tree。
2. 打开这类文件时——无论来自 markdown 里的相对超链接，还是直接点 File Tree 条目——**中间内容区**按代码渲染（语法高亮）。
3. 文档类型的定义沿用现状：`.md` / `.markdown`；其余带扩展名的文件都按"代码"处理。

### 非目标（本次不做）

- 改变"挂载目录即站点根"的约束（见"已知限制"）。
- 无 `-g` 时的目录扫描行为不变，仍只收 markdown。
- 不新增第三方依赖。

## 2. 方案设计

### 总体思路

```
-g "docs/**/*.md" "internal/**/*.go"
      │
      ├─ 后端：glob 不再按扩展名过滤 → filePatterns → 建树（含 .go）
      ├─ 后端：新增 GET /api/file/<path> → text/plain; charset=utf-8
      └─ 前端：按路径种类三分支渲染
                ├─ document  → MarkdownContent（原行为）
                ├─ code      → CodeContent（新增，语法高亮）
                └─ directory → DirectoryContent（原行为）
```

### 关键决策

| 决策 | 选择 | 理由 |
| --- | --- | --- |
| 高亮组件 | 复用前端已有的 `react-syntax-highlighter`（`PrismAsyncLight`） | 代码块高亮已经在用它，主题/等宽字体配置齐全；零新增依赖。未知语言回落到 `text`，prism 内部会安全降级为纯文本，不会抛错 |
| 取源码的接口 | 新增 `/api/file` | 复用现有的 catch-all（`sendFile`）也能拿到内容，但 mime 不可控（`.go` 变下载）、无 charset（中文注释乱码），且无法拦截二进制与超大文件 |
| 文件/目录判定 | 前端按"最后一段是否带扩展名"启发式判断（`getFileKind`） | 纯前端、深链刷新零延迟、不依赖文件树是否已加载。代价见"已知限制" |
| 安全边界 | `/api/file` 与 `/api/markdown` 共用同一个越界校验 | 不扩大可见范围：两者都限制在挂载目录内，且 `/api/file` 额外禁止 dotfile（`.env`、`.git/config`） |

### `/api/file` 契约

`GET /api/file/<path>`，path 相对挂载目录：

| 情形 | 响应 |
| --- | --- |
| 正常文本文件 | `200`，`text/plain; charset=utf-8`，去 BOM |
| 路径逃出挂载目录 | `403 Forbidden` |
| 路径含 `.` 开头的段 | `404 File not found` |
| 不存在 / 是目录 | `404 File not found` |
| 内容含 NUL 字节 | `415 Binary file is not supported` |
| 大于 2 MB | `413 File too large` |

### 安全说明

- 可见范围与改造前一致：挂载目录内的文件本来就由 catch-all 原样吐出，新接口只是把"以文本方式读取"显式化，未放开新目录。
- dotfile 一律拒绝，避免 `.env`、`.git/config` 之类的意外泄露。

## 3. 开发实现

### 后端

| 文件 | 改动 |
| --- | --- |
| `src/utils/path.ts`（新） | `resolveWithinDirectory()`：decode → `path.normalize` → `path.join` → `startsWith(directory)` 校验，越界返回 `null`；`hasDotSegment()` 判断路径是否含 dotfile 段 |
| `src/server/routes/file.ts`（新） | `fileRouter(directory)`，实现上表契约 |
| `src/utils/glob.ts` | 去掉扩展名过滤；`globSync` 加 `nodir: true` 与 `ignore: EXCLUDED_DIRECTORIES.map(...)`（防止 `-g "**/*"` 把 node_modules 拉进树，与目录模式的排除行为对齐） |
| `src/server/server.ts` | 挂载 `/api/file`；`/api/markdown` 守卫改为复用 `resolveWithinDirectory`（保持 `app.use('/api/markdown', 单函数)` 的挂载形态，现有单测靠它取中间件）；catch-all 改用 `shouldRenderApp()` |
| `src/constants.ts` | 新增 `ASSET_FILE_EXTENSIONS`（图片/字体/压缩包等按原样下载） |
| `src/cli.ts` | `-g` 帮助文案改为 "glob patterns to filter files" |

`shouldRenderApp()` 负责 catch-all 的分流：**目录、markdown、以及"确实存在的文本文件"回 `index.html`**（交给 SPA 渲染），资源类和不存在的文件保持原行为（原样 `sendFile`，缺失即 404）。这样浏览器直接刷新 `/src/utils/glob.ts` 能正常进入 SPA，而不会变成下载。

### 前端

| 文件 | 改动 |
| --- | --- |
| `src/utils/fileKind.ts`（新） | `FileKind = 'directory' \| 'document' \| 'code'`；`getFileKind()`（无扩展名→directory，`.md/.markdown`→document，其余→code）；`getPrismLanguage()`（扩展名→prism 语言，未命中→`text`）；`MAX_HIGHLIGHT_BYTES` |
| `src/utils/path.ts`（新） | `encodePath()`，从 `contentSlice` 抽出共用 |
| `src/store/slices/rawFileSlice.ts`（新） | `fetchRawFile`，照 `contentSlice` 范式（encodePath + `fetchData` + `isStaleRequest` + `abort`） |
| `src/components/Content/CodeContent/CodeContent.tsx`（新） | 代码视图：面包屑 + 代码图标 + 文件名，正文 `PrismAsyncLight`（行号、跟随高亮主题与等宽字体）；超过 `MAX_HIGHLIGHT_BYTES` 降级为等宽 `<pre>`，避免数万 DOM 节点卡死 |
| `src/components/Content/Content.tsx` | 二分支改三分支（`renderContent()`） |
| `src/store/slices/historySlice.ts` | `isDirectory` 改用 `getFileKind()` |
| `src/hooks/useWebSocket.ts` | `reload-content` 按种类分派：code → `fetchRawFile`，document → `fetchContent` + `fetchOutline`（否则代码文件变更会去打 `/api/markdown` 报 404） |
| `src/Layout.tsx` | 代码文件不向 Outline 传 filePath，避免右侧空白面板 |
| `src/components/LeftPane/FileTreeContent/FileTreeItemView.tsx` | 非文档文件用 `CodeOutlined` 图标 |
| `src/store/store.ts` | 注册 `rawFile` reducer |

### 受影响的既有测试

- `test/unit/utils/glob.test.ts`：原"过滤非 markdown"断言改为"保留所有匹配文件"。
- 前端 `FileTree` / `FileTreeContent` 快照：mock 树里含 `.txt`/`.js`，图标变化导致快照更新。

## 4. 使用与验证

### 用法

```bash
# 挂载根必须设在项目根，否则文档里的 ../.. 会在站点根处被截断
mdts . -g "docs/wiki/**/*.md" "internal/**/*.go" "**/*.ts"
```

### 冒烟清单

- 文件树出现 `.go` / `.ts`，图标为代码图标
- 点击文件 → 内容区高亮渲染、带行号
- markdown 内相对链接 `[x](../utils/glob.ts)` 点击 → 进入代码视图
- 编辑该文件保存 → 自动热更新
- 刷新 `/src/utils/glob.ts` → 仍进入 SPA（返回 `index.html`）
- `curl /api/file/...` → `text/plain; charset=utf-8`；越界 403、dotfile 404、二进制 415、>2MB 413

## 5. 已知限制与后续可选项

- **挂载目录即站点根**：`mdts docs/wiki` 时，文档里的 `../../internal/x.go` 会被浏览器 URL 解析在根处截断（`/internal/x.go`），永远指不到 `docs/` 之外。当前可行做法是根设在项目根再用 `-g` 收敛文件树。要彻底支持，需引入"项目根 / 内容根"双根：后端 `ServerContext` 增加项目根，前端 `MarkdownLink.resolvePath()` 按文档在文件系统中的真实位置解析。
- **目录名带点**（如 `v1.0`）会被判成文件 → 代码视图报 404。罕见，若需要可让后端在 `/api/filetree` 额外下发目录路径集合供前端校正。
- **仅 UTF-8**：GBK 等非 UTF-8 编码会乱码；二进制文件 415。
- **体积**：超过 2 MB 拒绝（413）；200 KB～2 MB 之间渲染时跳过高亮，直接输出纯文本。
- ** `-g` 模式会应用 `EXCLUDED_DIRECTORIES`**（node_modules、dist、build 等），若你要看这些目录里的文件需显式换挂载点。

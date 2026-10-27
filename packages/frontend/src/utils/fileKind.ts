export type FileKind = 'directory' | 'document' | 'code';

export const DOCUMENT_EXTENSIONS = ['.md', '.markdown'];

// Above this size, syntax highlighting is skipped to keep the page responsive.
export const MAX_HIGHLIGHT_BYTES = 200 * 1024;

export const FILE_EXTENSION_LANGUAGE_MAP: Record<string, string> = {
  bash: 'bash',
  c: 'c',
  cc: 'cpp',
  cpp: 'cpp',
  cs: 'csharp',
  css: 'css',
  env: 'text',
  go: 'go',
  gql: 'graphql',
  graphql: 'graphql',
  h: 'clike',
  hpp: 'cpp',
  html: 'markup',
  ini: 'ini',
  java: 'java',
  js: 'javascript',
  json: 'json',
  jsx: 'jsx',
  kt: 'kotlin',
  less: 'less',
  log: 'text',
  md: 'markdown',
  markdown: 'markdown',
  php: 'php',
  proto: 'text',
  py: 'python',
  rb: 'ruby',
  rs: 'rust',
  scala: 'scala',
  scss: 'scss',
  sh: 'bash',
  sql: 'sql',
  svg: 'markup',
  swift: 'swift',
  thrift: 'text',
  toml: 'toml',
  ts: 'typescript',
  tsx: 'tsx',
  txt: 'text',
  xml: 'markup',
  yaml: 'yaml',
  yml: 'yaml',
  zsh: 'bash',
};

const FALLBACK_LANGUAGE = 'text';

const getExtension = (filePath: string | null): string => {
  if (!filePath) return '';
  const lastSegment = filePath.split('/').pop() ?? '';
  const matched = /\.[^.]+$/.exec(lastSegment);
  return matched ? matched[0].toLowerCase() : '';
};

export const getFileKind = (filePath: string | null): FileKind => {
  const extension = getExtension(filePath);
  if (extension === '') return 'directory';
  return DOCUMENT_EXTENSIONS.includes(extension) ? 'document' : 'code';
};

export const getPrismLanguage = (filePath: string | null): string => {
  const extension = getExtension(filePath).replace(/^\./, '');
  return FILE_EXTENSION_LANGUAGE_MAP[extension] ?? FALLBACK_LANGUAGE;
};

// Assembles a runnable package (bin + built output + runtime manifest) into a
// directory, so it can be published to the `dist` branch and installed with
// `npm install -g github:<owner>/<repo>#dist` without running any build script.
//
// Usage: npx ts-node --project scripts/tsconfig.json scripts/assemble-dist.ts [outputDir]

import * as fs from 'fs';
import * as path from 'path';

const RUNTIME_FILES = ['bin', 'dist', 'README.md', 'LICENSE.md'];

const root = path.resolve(__dirname, '..');
const outputDir = path.resolve(root, process.argv[2] || 'dist-package');

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

RUNTIME_FILES.forEach((relativePath) => {
  const source = path.join(root, relativePath);
  if (!fs.existsSync(source)) {
    throw new Error(`Missing expected path: ${relativePath}`);
  }
  fs.cpSync(source, path.join(outputDir, relativePath), { recursive: true });
});

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
// devDependencies and scripts are only needed to build, not to run
delete manifest.devDependencies;
delete manifest.scripts;

fs.writeFileSync(path.join(outputDir, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Assembled runnable package in ${outputDir}`);

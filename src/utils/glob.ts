import { globSync } from 'glob';
import { EXCLUDED_DIRECTORIES } from '../constants';
import { ServerContext } from '../server/context';

export const resolveGlobPatterns = (directory: string, patterns: string[]): ServerContext => {
  const resolvedFiles = patterns.flatMap(pattern => globSync(pattern, {
    cwd: directory,
    nodir: true,
    ignore: EXCLUDED_DIRECTORIES.map(excluded => `**/${excluded}/**`),
  }));

  const filePatterns = [...new Set(resolvedFiles)];

  return { directory, globPatterns: patterns, filePatterns };
};

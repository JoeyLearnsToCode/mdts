import path from 'path';

/**
 * Resolves a request path inside the mounted directory.
 * Returns null when the path escapes the directory (path traversal).
 */
export const resolveWithinDirectory = (directory: string, requestPath: string): string | null => {
  // Decode the URI component to handle encoded characters in the path
  const decodedPath = decodeURIComponent(requestPath);
  // Normalize the path to resolve '..' and '.' segments
  const normalizedPath = path.normalize(decodedPath);

  const filePath = path.join(directory, normalizedPath);

  // Security check: Ensure the resolved path is within the designated directory
  // This prevents path traversal attacks (e.g., accessing files outside 'directory')
  return filePath.startsWith(directory) ? filePath : null;
};

export const hasDotSegment = (relativePath: string): boolean => {
  return relativePath.split(path.sep).some(segment => segment.startsWith('.'));
};

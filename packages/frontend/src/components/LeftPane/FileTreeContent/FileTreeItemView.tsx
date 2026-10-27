import { ArticleOutlined, CodeOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { TreeItem } from '@mui/x-tree-view';
import React, { useCallback } from 'react';
import { getFileKind } from '../../../utils/fileKind';
import { FileTreeItem } from './types';

interface FileTreeItemViewProps {
  fileItem: FileTreeItem;
  onFileSelect: (path: string) => void;
  getStatusColor: (status: string) => string;
}

export const FileTreeItemView: React.FC<FileTreeItemViewProps> = ({ fileItem, onFileSelect, getStatusColor }) => {
  const fileName = fileItem.path.split('/').pop();
  const handleClick = useCallback(() => onFileSelect(fileItem.path), [fileItem, onFileSelect]);
  const FileIcon = getFileKind(fileItem.path) === 'document' ? ArticleOutlined : CodeOutlined;

  return (
    <TreeItem
      key={fileItem.path}
      itemId={fileItem.path}
      label={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FileIcon sx={{ mr: 1, fontSize: 'small' }} />
          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: getStatusColor(fileItem.status) }}>
            {fileName}
          </Typography>
          {fileItem.status && fileItem.status !== ' ' && (
            <Typography variant="body2" sx={{ fontSize: '0.75rem', color: getStatusColor(fileItem.status), ml: 1 }}>
              {fileItem.status}
            </Typography>
          )}
        </Box>
      }
      onClick={handleClick}
    />
  );
};

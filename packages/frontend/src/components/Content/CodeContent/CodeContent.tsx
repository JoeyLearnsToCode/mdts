import { CodeOutlined } from '@mui/icons-material';
import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrismAsyncLight } from 'react-syntax-highlighter';
import useIsMobile from '../../../hooks/useIsMobile';
import { useSyntaxHighlighterTheme } from '../../../hooks/useSyntaxHighlighterTheme';
import { fetchRawFile } from '../../../store/slices/rawFileSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { getPrismLanguage, MAX_HIGHLIGHT_BYTES } from '../../../utils/fileKind';
import ErrorView from '../../ErrorView';
import BreadCrumb from '../BreadCrumb';

interface CodeContentProps {
  onDirectorySelect?: (directoryPath: string) => void;
}

const LoadingView: React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
    <CircularProgress />
  </Box>
);

const CodeContent: React.FC<CodeContentProps> = ({ onDirectorySelect }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { currentPath } = useSelector((state: RootState) => state.history);
  const { contentMode } = useSelector((state: RootState) => state.appSetting);
  const { content, loading, error } = useSelector((state: RootState) => state.rawFile);
  const { fontFamilyMonospace, syntaxHighlighterTheme } = useSelector((state: RootState) => state.config);
  const syntaxHighlighterStyle = useSyntaxHighlighterTheme(syntaxHighlighterTheme);

  const isMobile = useIsMobile();

  useEffect(() => {
    const request = dispatch(fetchRawFile(currentPath));
    return () => {
      request.abort();
    };
  }, [dispatch, currentPath]);

  if (error) {
    return <ErrorView error={error} />;
  }

  const language = getPrismLanguage(currentPath);

  return (
    <Box
      sx={{
        width: '100%',
        minWidth: 0,
        minHeight: 'calc(100vh - 64px)',
        m: 0,
        p: isMobile ? 2 : 4,
        bgcolor: 'background.paper',
        ...(contentMode === 'compact' && !isMobile && {
          width: '800px',
          margin: '0 auto',
          borderRight: '1px solid',
          borderLeft: '1px solid',
          borderColor: 'divider',
        })
      }}
    >
      <BreadCrumb onDirectorySelect={onDirectorySelect} />
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <CodeOutlined sx={{ mr: 2 }} fontSize={isMobile ? 'medium' : 'large'} />
        <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom sx={{ mb: 0, wordBreak: 'break-word' }}>
          {currentPath?.split('/').pop()}
        </Typography>
      </Box>
      {loading ? (
        <LoadingView />
      ) : content.length > MAX_HIGHLIGHT_BYTES ? (
        <Box
          component="pre"
          sx={{
            m: 0,
            fontFamily: fontFamilyMonospace,
            fontSize: '0.875rem',
            overflowX: 'auto',
          }}
        >
          {content}
        </Box>
      ) : (
        <PrismAsyncLight
          style={syntaxHighlighterStyle}
          className={'syntax-highlighter'}
          customStyle={{ margin: 0 }}
          showLineNumbers={true}
          language={language}
          codeTagProps={{ style: { fontFamily: fontFamilyMonospace } }}
          PreTag="div"
        >
          {content.replace(/\n$/, '')}
        </PrismAsyncLight>
      )}
    </Box>
  );
};

export default CodeContent;

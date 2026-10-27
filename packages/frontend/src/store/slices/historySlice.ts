import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFileKind } from '../../utils/fileKind';
import type { AppDispatch } from '../store';

interface HistoryState {
  currentPath: string | null;
  isDirectory: boolean;
}

const decodePath = (path: string): string => {
  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
};

export const parseHistoryFromPathname = (pathname: string): HistoryState => {
  const rawPath = pathname.substring(1);
  if (rawPath === '') {
    return { currentPath: null, isDirectory: false };
  }

  const path = decodePath(rawPath);

  return { currentPath: path, isDirectory: getFileKind(path) === 'directory' };
};

const initialState: HistoryState = {
  currentPath: null,
  isDirectory: false,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (
      state,
      action: PayloadAction<{ path: string | null; isDirectory: boolean }>
    ) => {
      state.currentPath = action.payload.path;
      state.isDirectory = action.payload.isDirectory;
    },
  },
});

export const { setHistory } = historySlice.actions;

export const updateHistoryFromLocation = (pathname: string) => (dispatch: AppDispatch): void => {
  const { currentPath, isDirectory } = parseHistoryFromPathname(pathname);
  dispatch(setHistory({ path: currentPath, isDirectory }));
};

export default historySlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../api';
import { encodePath } from '../../utils/path';
import { isStaleRequest } from '../isStaleRequest';

interface RawFileState {
  content: string;
  loading: boolean;
  error: string | null;
  latestRequestId: string | null;
}

const initialState: RawFileState = {
  content: '',
  loading: true,
  error: null,
  latestRequestId: null,
};

const rawFileApiUrl = (path: string | null): string => `/api/file/${encodePath(path ?? '')}`;

export const fetchRawFile = createAsyncThunk(
  'rawFile/fetchRawFile',
  async (path: string | null, { signal }) => {
    const data = await fetchData<string>(rawFileApiUrl(path), 'text', signal);
    return data || '';
  }
);

const rawFileSlice = createSlice({
  name: 'rawFile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRawFile.pending, (state, action) => {
        state.latestRequestId = action.meta.requestId;
        if (!state.content) {
          state.loading = true;
        }
        state.error = null;
      })
      .addCase(fetchRawFile.fulfilled, (state, action) => {
        if (isStaleRequest(state, action)) {
          return;
        }
        state.loading = false;
        state.content = action.payload;
      })
      .addCase(fetchRawFile.rejected, (state, action) => {
        if (isStaleRequest(state, action)) {
          return;
        }
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch file';
      });
  },
});

export default rawFileSlice.reducer;

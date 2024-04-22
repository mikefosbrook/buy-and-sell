import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IListing } from '@/data/types';

interface IListingsState {
  listings: IListing[];
  fetching: boolean;
  error: string | undefined;
}

const initialState: IListingsState = {
  listings: [],
  fetching: true,
  error: undefined,
};

export const fetchListings = createAsyncThunk('listings/fetchListings', async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/listings`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const data = await response.json();

  return data;
});

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchListings.pending, (state) => ({
        ...state,
        fetching: true,
      }))
      .addCase(fetchListings.rejected, (state, action) => ({
        ...state,
        fetching: false,
        error: action.error.message,
      }))
      .addCase(fetchListings.fulfilled, (state, action) => ({
        ...state,
        listings: action.payload,
        fetching: false,
        error: undefined,
      })),
});

export default listingsSlice.reducer;

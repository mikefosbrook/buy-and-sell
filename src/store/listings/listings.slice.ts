import { createSlice } from '@reduxjs/toolkit';
import { getListings } from '@/store/listings/listings.api';
import { IListing } from '@/data/types';

interface IListingsState {
  data: IListing[];
  fetching: boolean;
  error: string | undefined;
}

const initialState: IListingsState = {
  data: [],
  fetching: false,
  error: undefined,
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getListings.pending, (state) => ({
        ...state,
        fetching: true,
      }))
      .addCase(getListings.rejected, (state, action) => ({
        ...state,
        fetching: false,
        error: action.error.message,
      }))
      .addCase(getListings.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
        fetching: false,
        error: undefined,
      })),
});

export default listingsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getListingById } from '@/store/listing/listing.api';
import { IListing } from '@/data/types';

interface IListingState {
  data: IListing | undefined;
  fetching: boolean;
  error: string | undefined;
}

const initialState: IListingState = {
  data: undefined,
  fetching: true,
  error: undefined,
};

const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListingById.pending, (state) => ({
      ...state,
      fetching: true,
    }));
    builder.addCase(getListingById.rejected, (state, action) => ({
      ...state,
      fetching: false,
      error: action.error.message,
    }));
    builder.addCase(getListingById.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      fetching: false,
      error: undefined,
    }));
  },
});

export default listingSlice.reducer;

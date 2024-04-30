import { createSlice } from '@reduxjs/toolkit';
import { fetchSingleListing } from '@/store/listings/singleListing.api';
import { IListing } from '@/data/types';

interface ISingleListingState {
  data: IListing | undefined;
  fetching: boolean;
  error: string | undefined;
}

const initialState: ISingleListingState = {
  data: undefined,
  fetching: true,
  error: undefined,
};

const singleListing = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    resetSingleListing: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleListing.pending, (state) => ({
      ...state,
      fetching: true,
    }));
    builder.addCase(fetchSingleListing.rejected, (state, action) => ({
      ...state,
      fetching: false,
      error: action.error.message,
    }));
    builder.addCase(fetchSingleListing.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      fetching: false,
      error: undefined,
    }));
  },
});

export const { resetSingleListing } = singleListing.actions;

export default singleListing.reducer;

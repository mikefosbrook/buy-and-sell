import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/rootReducer';

export const selectListing = createSelector(
  (state: RootState) => state,
  (state) => state.listing,
);

export const selectListingData = createSelector(selectListing, (listing) => listing.data);

export const selectListingIsFetching = createSelector(selectListing, (listing) => listing.fetching);

export const selectListingError = createSelector(selectListing, (listing) => listing.error);

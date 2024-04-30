import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/rootReducer';

export const selectSingleListing = createSelector(
  (state: RootState) => state,
  (state) => state.listing,
);

export const selectSingleListingData = createSelector(selectSingleListing, (listing) => listing.data);

export const selectSingleListingIsFetching = createSelector(selectSingleListing, (listing) => listing.fetching);

export const selectSingleListingError = createSelector(selectSingleListing, (listing) => listing.error);

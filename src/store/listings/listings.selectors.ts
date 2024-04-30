import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/rootReducer';

export const selectListings = createSelector(
  (state: RootState) => state,
  (state) => state.listings,
);

export const selectListingsData = createSelector(selectListings, (listings) => listings.data);

export const selectListingsIsFetching = createSelector(selectListings, (listings) => listings.fetching);

export const selectListingsError = createSelector(selectListings, (listings) => listings.error);

import { combineReducers } from '@reduxjs/toolkit';
import listingsReducer from './listings/listings.slice';
import singleListingReducer from './listings/singleListing.slice';

const rootReducer = combineReducers({
  listings: listingsReducer,
  listing: singleListingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

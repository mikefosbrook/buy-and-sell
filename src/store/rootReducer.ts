import { combineReducers } from '@reduxjs/toolkit';
import listingsReducer from './listings/listings.slice';
import listingReducer from './listing/listing.slice';

const rootReducer = combineReducers({
  listings: listingsReducer,
  listing: listingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

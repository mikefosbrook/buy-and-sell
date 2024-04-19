import { combineReducers } from '@reduxjs/toolkit';
import listingsReducer from './listings.slice';

const rootReducer = combineReducers({
  listings: listingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

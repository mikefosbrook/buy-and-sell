import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSingleListing = createAsyncThunk('listing/fetchSingleListing', async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/listings/${id}`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const data = await response.json();

  return data;
});

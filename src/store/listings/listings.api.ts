import { createAsyncThunk } from '@reduxjs/toolkit';

export const getListings = createAsyncThunk('listings/getListings', async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/listings`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const data = await response.json();

  return data;
});

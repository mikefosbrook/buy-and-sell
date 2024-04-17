import { http, HttpResponse } from 'msw';
import listingData from '@/resources/listing-mock-data.json';

export const listingGetRequest = http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/listings`, async () => {
  const response = listingData;
  const status = 200;
  return HttpResponse.json(response, { status });
});

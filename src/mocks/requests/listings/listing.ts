import { http, HttpResponse } from 'msw';
import listingData from '@/resources/listing-mock-data.json';

export const singleListingGetRequest = http.get(
  `${process.env.NEXT_PUBLIC_BASE_URL}/listings/:id`,
  async ({ params }) => {
    const response = listingData.find((listing) => listing.id === params.id);
    const status = 200;
    return HttpResponse.json(response, { status });
  },
);

'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { fetchListings } from '@/store/listings/listings.api';
import { selectListingsData, selectListingsIsFetching, selectListingsError } from '@/store/listings/listings.selectors';
import ListingCard from '@/components/ListingCard/ListingCard';
import { formatCurrency } from '@/utils/formatCurrency';

export default function Home() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectListingsData);
  const fetching = useAppSelector(selectListingsIsFetching);
  const error = useAppSelector(selectListingsError);

  useEffect(() => {
    if (data.length === 0) {
      setTimeout(() => {
        dispatch(fetchListings());
      }, 100);
    }
  }, [dispatch, data]);

  if (fetching) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || data.length <= 0) {
    return undefined;
  }

  return (
    <section>
      {data.map((listing) => (
        <ListingCard
          id={listing.id}
          key={listing.id}
          title={listing.title}
          description={listing.description}
          city={listing.city}
          price={formatCurrency(listing.price, listing.locale, listing.currency)}
          image={listing.pictures[0]}
          numberOfImages={listing.pictures.length}
        />
      ))}
    </section>
  );
}

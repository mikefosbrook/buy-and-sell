'use client';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';

import { fetchListings } from '@/store/listings/listings.slice';
import ListingCard from '@/components/ListingCard/ListingCard';
import { selectListingsData, selectListingsIsFetching, selectListingsError } from '@/store/listings/listings.selectors';

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

  return (
    <section>
      {error && <p>Error: {error}</p>}
      {fetching ? (
        <p>Loading</p>
      ) : (
        data?.map((listing) => (
          <ListingCard
            key={listing.id}
            title={listing.title}
            description={listing.description}
            location={listing.location}
            price={listing.price}
            image={listing.pictures[0]}
            numberOfImages={listing.pictures.length}
          />
        ))
      )}
    </section>
  );
}

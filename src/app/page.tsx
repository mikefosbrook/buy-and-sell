'use client';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';

import { fetchListings } from '@/store/listings.slice';
import ListingCard from '@/components/ListingCard/ListingCard';

export default function Home() {
  const dispatch = useAppDispatch();
  const { listings, fetching, error } = useAppSelector((state) => state.listings);

  useEffect(() => {
    if (!listings) {
      setTimeout(() => {
        dispatch(fetchListings());
      }, 100);
    }
  }, [dispatch, listings]);

  return (
    <section>
      {error && <p>Error: {error}</p>}
      {fetching && <p>Loading</p>}
      {listings &&
        listings.map((listing) => (
          <ListingCard
            key={listing.id}
            title={listing.title}
            description={listing.description}
            location={listing.location}
            price={listing.price}
            image={listing.pictures[0]}
            numberOfImages={listing.pictures.length}
          />
        ))}
    </section>
  );
}

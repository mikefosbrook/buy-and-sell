'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getListingById } from '@/store/listings/listing.api';
import { selectListingData, selectListingIsFetching, selectListingError } from '@/store/listings/listing.selectors';
import { resetSingleListing } from '@/store/listings/listing';
import Image from 'next/image';
import { formatCurrency } from '@/utils/formatCurrency';

import styles from './page.module.css';

export default function ListingPage({ params }: { params: { id: string } }) {
  const listingId = params.id;
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectListingData);
  const fetching = useAppSelector(selectListingIsFetching);
  const error = useAppSelector(selectListingError);

  useEffect(() => {
    // clear the current listing and then fetch the new one
    dispatch(resetSingleListing());
    setTimeout(() => {
      dispatch(getListingById(listingId));
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetching) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return undefined;
  }

  return (
    <section>
      {data && (
        <article className={styles.listingDetails}>
          <div>
            <h1>{data.title}</h1>
            <p>{data.city}</p>
            <p>{formatCurrency(data.price, data.locale, data.currency)}</p>
            <h2>Description</h2>
            <p>{data.description}</p>
          </div>
          <div className={styles.imageGallery}>
            {data.pictures.map((picture) => (
              <figure>
                <Image alt="" src={`${picture}`} layout="fill" objectFit="cover" />
              </figure>
            ))}
          </div>
        </article>
      )}
    </section>
  );
}
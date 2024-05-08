'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getListingById } from '@/store/listing/listing.api';
import { selectListingData, selectListingIsFetching, selectListingError } from '@/store/listing/listing.selectors';
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
      <article className={styles.listingDetails}>
        <div>
          <h1>{data.title}</h1>
          <p>{data.city}</p>
          <p>{formatCurrency(data.price, data.locale, data.currency)}</p>
          <h2>Description</h2>
          <p>{data.description}</p>
        </div>
        <div className={styles.imageGallery}>
          {data.pictures.map((picture, index) => (
            <figure key={picture.id}>
              <Image
                alt={picture.alt ?? ''}
                src={picture.path}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority={index < 2}
              />
            </figure>
          ))}
        </div>
      </article>
    </section>
  );
}

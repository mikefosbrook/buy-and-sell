import Image from 'next/image';
import Link from 'next/link';
import styles from './ListingCard.module.css';

interface ListingCardProps {
  id: string;
  title: string;
  description: string;
  city: string;
  price: string;
  image: string;
  imageAlt?: string;
  numberOfImages: number;
  renderPriority: boolean;
}

export default function ListingCard({
  id,
  title,
  description,
  city,
  price,
  image,
  imageAlt = '',
  numberOfImages,
  renderPriority = false,
}: ListingCardProps) {
  return (
    <Link href={`/listing/${id}`}>
      <article className={styles.listingCard}>
        <div className={styles.listingCardContent}>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{city}</p>
          <p>{price}</p>
          <p>📷 {numberOfImages}</p>
        </div>
        <figure>
          <Image alt={imageAlt} src={image} fill sizes="(max-width: 768px) 100vw, 200px" priority={renderPriority} />
        </figure>
      </article>
    </Link>
  );
}

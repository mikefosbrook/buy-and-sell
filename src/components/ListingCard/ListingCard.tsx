import Image from 'next/image';
import styles from './ListingCard.module.css';

interface ListingCardProps {
  title: string;
  description: string;
  city: string;
  price: string;
  image: string;
  numberOfImages: number;
}

export default function ListingCard({ title, description, city, price, image, numberOfImages }: ListingCardProps) {
  return (
    <article className={styles.listingCard}>
      <div className={styles.listingCardContent}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{city}</p>
        <p>{price}</p>
        <p>📷 {numberOfImages}</p>
      </div>
      <figure>
        <Image alt="" src={`${image}`} layout="fill" objectFit="cover" />
      </figure>
    </article>
  );
}

import Image from "next/image";
import type { Boutique } from "@/data/dummy";
import styles from "./BoutiqueCard.module.scss";

interface BoutiqueCardProps {
  boutique: Boutique;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  return (
    <span className={styles.stars} aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < full ? "currentColor" : "none"}
          stroke={i < full ? "currentColor" : "currentColor"}
          strokeWidth="1.5"
          style={i === full && rating % 1 >= 0.5 ? { opacity: 0.6 } : undefined}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className={styles.ratingNum}>{rating}</span>
    </span>
  );
}

export default function BoutiqueCard({ boutique }: BoutiqueCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={boutique.image} alt={boutique.name} fill className={styles.image} sizes="(max-width: 768px) 100vw, 50vw" />
        {boutique.selected && (
          <span className={styles.checkBadge} aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        )}
      </div>
      <div className={styles.overlay}>
        <h3 className={styles.name}>{boutique.name}</h3>
        <p className={styles.meta}>{boutique.ordersCompleted} orders Completed</p>
        <p className={styles.orders}>Holding {boutique.holdingOrders} Orders</p>
        <div className={styles.ratingRow}>
          <StarRating rating={boutique.rating} />
          <span className={styles.reviews}>{boutique.reviewCount} Reviews</span>
        </div>
        <button type="button" className={styles.viewBtn}>
          View
        </button>
      </div>
    </article>
  );
}

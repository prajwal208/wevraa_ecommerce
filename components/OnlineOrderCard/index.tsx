import Image from "next/image";
import type { OnlineOrderItem } from "@/data/dummy";
import styles from "./OnlineOrderCard.module.scss";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function OnlineOrderCard({ order }: { order: OnlineOrderItem }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.brand}>{order.brand}</h3>
      <p className={styles.desc}>{order.description}</p>
      <p className={styles.price}>{formatPrice(order.price)}</p>
      <p className={styles.size}>Size {order.size}</p>
      <div className={styles.row}>
        <div>
          <span className={styles.status}>{order.status}</span>
          <span className={styles.date}> {order.date}</span>
        </div>
        <button type="button" className={styles.trackBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          Track Order
        </button>
      </div>
      <div className={styles.ratingRow}>
        <span className={styles.ratingLabel}>Rate this Order</span>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => (
            <button key={i} type="button" aria-label={`Rate ${i} star`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import { reviews } from "@/data/dummy";
import styles from "./CustomerReviews.module.scss";

export default function CustomerReviews() {
  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <h2 id="reviews-title" className={styles.title}>
        Customer Reviews
      </h2>
      <div className={styles.scroll}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.card}>
            {review.avatar && (
              <div className={styles.avatarWrap}>
                <Image
                  src={review.avatar}
                  alt=""
                  fill
                  className={styles.avatar}
                  sizes="48px"
                />
              </div>
            )}
            <p className={styles.quote}>{review.quote}</p>
            <p className={styles.author}>— {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import type { SelectedImage } from "@/data/dummy";
import styles from "./SelectedImages.module.scss";

interface SelectedImagesProps {
  images: SelectedImage[];
}

export default function SelectedImages({ images }: SelectedImagesProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Selected images</h2>
      <div className={styles.grid}>
        {images.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image src={item.image} alt="" fill className={styles.image} sizes="50vw" />
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
      <button type="button" className={styles.expandBtn} aria-label="View more">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
}

import Image from "next/image";
import styles from "./PlaceholderBanners.module.scss";

const placeholderImage = "/images/placeholder-rect.svg";

export default function PlaceholderBanners() {
  return (
    <section className={styles.section} aria-hidden>
      <div className={styles.full}>
        <Image
          src={placeholderImage}
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <div className={`${styles.row} ${styles.two}`}>
        <div className={styles.block}>
          <Image src={placeholderImage} alt="" fill sizes="50vw" />
        </div>
        <div className={styles.block}>
          <Image src={placeholderImage} alt="" fill sizes="50vw" />
        </div>
      </div>
      <div className={`${styles.row} ${styles.asymmetric}`}>
        <div className={styles.block}>
          <Image src={placeholderImage} alt="" fill sizes="60vw" />
        </div>
        <div className={styles.block}>
          <Image src={placeholderImage} alt="" fill sizes="40vw" />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import styles from "./MeasurementAddonsRows.module.scss";

export default function MeasurementAddonsRows() {
  return (
    <section className={styles.section}>
      <Link href="/measurement" className={styles.row}>
        <span className={styles.label}>MEASUREMENT</span>
        <span className={styles.chevron} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </Link>
      <Link href="/addons" className={styles.row}>
        <span className={styles.label}>Add ons</span>
        <span className={styles.chevron} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </Link>
    </section>
  );
}

import styles from "./MeasurementAddons.module.scss";

export default function MeasurementAddons() {
  return (
    <section className={styles.section}>
      <button type="button" className={styles.row}>
        <span>MEASUREMENT</span>
        <span className={styles.arrow} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </button>
      <button type="button" className={styles.row}>
        <span>Add ons</span>
        <span className={styles.arrow} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </button>
    </section>
  );
}

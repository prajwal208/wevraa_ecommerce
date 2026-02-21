import Link from "next/link";
import styles from "./MeasurementHeader.module.scss";
import { defaultSize } from "@/data/measurement";

export default function MeasurementHeader() {
  return (
    <header className={styles.header}>
      <Link href="/profile" className={styles.backBtn} aria-label="Back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </Link>
      <h1 className={styles.title}>SIZE | {defaultSize}</h1>
    </header>
  );
}

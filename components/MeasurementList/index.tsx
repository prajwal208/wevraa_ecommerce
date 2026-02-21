import type { MeasurementItem } from "@/data/measurement";
import styles from "./MeasurementList.module.scss";

interface MeasurementListProps {
  items: MeasurementItem[];
}

function RulerSegment() {
  const ticks = Array.from({ length: 25 }, (_, i) => (
    <span
      key={i}
      className={`${styles.tick} ${i % 5 === 0 ? styles.tickMajor : ""}`}
    />
  ));
  return <div className={styles.rulerLine}>{ticks}</div>;
}

export default function MeasurementList({ items }: MeasurementListProps) {
  return (
    <div className={styles.wrap}>
      <p className={styles.scrollHint}>
        <span aria-hidden>→</span> Scroll to Select
      </p>
      <div className={styles.list}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.bar}>
              <span className={styles.barName}>{item.name}</span>
              <span className={styles.barValue}>{item.value.toFixed(2)}</span>
            </div>
            <div className={styles.ruler}>
              <RulerSegment />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

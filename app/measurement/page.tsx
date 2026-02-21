import Link from "next/link";
import MeasurementHeader from "@/components/MeasurementHeader";
import MeasurementList from "@/components/MeasurementList";
import MeasurementModel from "@/components/MeasurementModel";
import BottomNav from "@/components/BottomNav";
import { measurementItems } from "@/data/measurement";
import styles from "./measurement.module.scss";

export default function MeasurementPage() {
  return (
    <>
      <MeasurementHeader />
      <main className={`${styles.main} main-with-bottom-nav`}>
        <div className={styles.content}>
          <div className={styles.left}>
            <MeasurementList items={measurementItems} />
          </div>
          <div className={styles.right}>
            <MeasurementModel />
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}

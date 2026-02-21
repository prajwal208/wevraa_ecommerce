import styles from "./MeasurementModel.module.scss";

export default function MeasurementModel() {
  return (
    <div className={styles.wrap}>
      <div className={styles.placeholder}>
        3D model placeholder
        <br />
        <span style={{ fontSize: "12px" }}>Scroll to Select</span>
      </div>
    </div>
  );
}

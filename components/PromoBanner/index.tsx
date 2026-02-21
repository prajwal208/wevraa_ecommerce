import styles from "./PromoBanner.module.scss";
import { promoBannerText } from "@/data/dummy";

export default function PromoBanner() {
  return <div className={styles.banner}>{promoBannerText}</div>;
}

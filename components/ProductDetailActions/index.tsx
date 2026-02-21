import styles from "./ProductDetailActions.module.scss";

export default function ProductDetailActions() {
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.buyNow}>
        BUY NOW
      </button>
      <button type="button" className={styles.addToBag}>
        ADD TO BAG
      </button>
    </div>
  );
}

import Link from "next/link";
import styles from "./CartCheckout.module.scss";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

interface CartCheckoutProps {
  total: number;
}

export default function CartCheckout({ total }: CartCheckoutProps) {
  return (
    <div className={styles.wrap}>
      <Link href="#" className={styles.button}>
        {formatPrice(total)} - CHECKOUT
      </Link>
    </div>
  );
}

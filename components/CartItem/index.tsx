"use client";

import Image from "next/image";
import type { CartItem as CartItemType } from "@/data/dummy";
import styles from "./CartItem.module.scss";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

interface CartItemProps {
  item: CartItemType;
  onRemove?: (id: string) => void;
  onQuantityChange?: (id: string, quantity: number) => void;
}

export default function CartItem({ item, onRemove, onQuantityChange }: CartItemProps) {
  const handleDecrement = () => {
    if (item.quantity <= 1) return;
    onQuantityChange?.(item.id, item.quantity - 1);
  };
  const handleIncrement = () => {
    onQuantityChange?.(item.id, item.quantity + 1);
  };

  return (
    <div className={styles.row}>
      <div className={styles.imageWrap}>
        <Image
          src={item.image}
          alt={item.brand}
          fill
          className={styles.image}
          sizes="100px"
        />
      </div>
      <div className={styles.details}>
        <p className={styles.brand}>{item.brand}</p>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>{formatPrice(item.price)}</p>
        <div className={styles.sizeRemove}>
          <span className={styles.size}>Size {item.size}</span>
          <button
            type="button"
            className={styles.remove}
            onClick={() => onRemove?.(item.id)}
          >
            Remove
          </button>
        </div>
        <div className={styles.quantityWrap}>
          <button
            type="button"
            className={styles.deleteBtn}
            aria-label="Delete item"
            onClick={() => onRemove?.(item.id)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <input
            type="number"
            className={styles.qtyInput}
            value={item.quantity}
            min={1}
            max={99}
            readOnly
            aria-label="Quantity"
          />
          <button
            type="button"
            className={styles.qtyBtn}
            aria-label="Decrease quantity"
            onClick={handleDecrement}
          >
            −
          </button>
          <button
            type="button"
            className={styles.qtyBtn}
            aria-label="Increase quantity"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

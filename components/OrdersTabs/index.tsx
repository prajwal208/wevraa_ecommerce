"use client";

import styles from "./OrdersTabs.module.scss";

const TABS = [
  { id: "online", label: "Online Orders" },
  { id: "custom", label: "Custom Orders" },
  { id: "bills", label: "Bills" },
] as const;

export type OrdersTabId = (typeof TABS)[number]["id"];

interface OrdersTabsProps {
  active: OrdersTabId;
  onSelect: (id: OrdersTabId) => void;
}

export default function OrdersTabs({ active, onSelect }: OrdersTabsProps) {
  return (
    <div className={styles.tabs} role="tablist">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={active === tab.id}
          className={`${styles.tab} ${active === tab.id ? styles.active : ""}`}
          onClick={() => onSelect(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

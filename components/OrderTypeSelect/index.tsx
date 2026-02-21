"use client";

import { useState } from "react";
import styles from "./OrderTypeSelect.module.scss";

interface OrderType {
  id: string;
  label: string;
  selected: boolean;
}

interface OrderTypeSelectProps {
  types: OrderType[];
}

export default function OrderTypeSelect({ types: initialTypes }: OrderTypeSelectProps) {
  const [types, setTypes] = useState(initialTypes);

  const handleSelect = (id: string) => {
    setTypes((prev) =>
      prev.map((t) => ({ ...t, selected: t.id === id }))
    );
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Select Order Type</h2>
      <div className={styles.chips}>
        {types.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`${styles.chip} ${t.selected ? styles.selected : ""}`}
            onClick={() => handleSelect(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </section>
  );
}

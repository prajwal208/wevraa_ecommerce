"use client";

import { useState } from "react";
import type { FooterAccordionItem } from "@/data/dummy";
import styles from "./OurPolicies.module.scss";

interface OurPoliciesProps {
  items: FooterAccordionItem[];
}

export default function OurPolicies({ items }: OurPoliciesProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className={styles.section} aria-labelledby="policies-title">
      <h2 id="policies-title" className={styles.title}>
        Our Policies
      </h2>
      <div className={styles.accordion}>
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`${styles.item} ${isOpen ? styles.open : ""}`}
            >
              <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <span className={styles.icon} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div className={styles.panel} role="region" aria-hidden={!isOpen}>
                <div className={styles.content}>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

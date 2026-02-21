"use client";

import { useState } from "react";
import styles from "./Accordion.module.scss";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
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
              aria-controls={`accordion-${item.id}`}
              id={`accordion-trigger-${item.id}`}
            >
              <span>{item.title}</span>
              <span className={styles.icon} aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div
              id={`accordion-${item.id}`}
              className={styles.panel}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              aria-hidden={!isOpen}
            >
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

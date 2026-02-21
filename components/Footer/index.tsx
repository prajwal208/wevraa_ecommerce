import Accordion from "@/components/Accordion";
import {
  footerShortDesc,
  footerBullets,
  footerAccordionItems,
  footerLongDesc,
  socialLinks,
} from "@/data/dummy";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <p className={styles.shortDesc}>{footerShortDesc}</p>
            <ul className={styles.bullets}>
              {footerBullets.map((text, i) => (
                <li key={i} className={styles.bullet}>
                  {text}
                </li>
              ))}
            </ul>
            <div className={styles.social}>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={styles.socialLink}
                  aria-label={link.label}
                >
                  {link.icon.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.accordionWrap}>
            <Accordion items={footerAccordionItems} />
          </div>
        </div>
        <p className={styles.longDesc}>{footerLongDesc}</p>
      </div>
    </footer>
  );
}

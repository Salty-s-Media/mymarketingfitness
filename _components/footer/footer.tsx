import Link from "next/link";
import { Logo } from "../logo/logo";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.lg}>
          <Logo />
        </div>
        <div className={styles.footerInfo}>
          <a href="mailto:info@mymarketingfitness.com">
            info@mymarketingfitness.com
          </a>
          <p>
            <br />
            &copy; 2024 My Marketing Fitness
          </p>
          <Link
            style={{
              marginRight: "auto",
              textDecoration: "underline",
              color: "skyblue",
            }}
            href="/refund_policy"
          >
            Refund Policy
          </Link>
          <Link
            style={{
              marginLeft: "8px",
              textDecoration: "underline",
              color: "skyblue",
            }}
            href="/privacy_policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

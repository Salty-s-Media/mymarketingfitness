"use client";

import { Footer } from "@/_components/footer/footer";
import styles from "./privacy.module.css";
import Link from "next/link";
import { Logo } from "@/_components/logo/logo";
import { Navbar } from "@/_components/navbar/navbar";

export default function PrivacyPolicy() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.navarea}>
        <Logo />
        <Navbar />
      </div>
      <div className={styles.spc}></div>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.title}>Privacy Policy</div>
          <div className={styles.subtitle}>May 6th, 2024</div>
          <div className={styles.text}>
            This policy defines the policy of Roofing Insights LLC (hereinafter
            referred to as the Operator) regarding the processing of personal
            data and contains information about the requirements for the
            protection of personal data implemented by the Operator. This policy
            applies to all personal data processed through the Service which the
            Operator receives or can receive from the User.
          </div>
        </div>
        <div className={styles.iframeContainer}>
          <iframe
            src="https://docs.google.com/document/d/1xezSQQp3v-1fpTmlUpm03fJjoWTHz_zm/preview"
            style={{
              display: "flex",
              width: "100%",
              height: "700px",
              minHeight: "350px",
              maxHeight: "700px",
              overflow: "hidden",
            }}
            frameBorder="0"
          ></iframe>
        </div>
        <br></br>
        <br></br>
        <div className={styles.section}>
          <Link href="/" className={styles.btn}>
            Go Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

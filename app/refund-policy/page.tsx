"use client";

import { useEffect } from "react";
import styles from "./refund.module.css";
import Link from "next/link";

export default function Refund() {
  useEffect(() => {
    const url = `https://mymarketingfitness.com/refundPolicy.docx`;

    const link = document.createElement("a");
    link.href = url;
    link.download = "refund-policy.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      <div className={styles.centered}>
        Downloading your refund policy... <br></br>
        <Link className={styles.btn} href="/">
          Go Back
        </Link>
      </div>
    </>
  );
}

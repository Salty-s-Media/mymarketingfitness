"use client";

import { Check } from "lucide-react";
import { Sep } from "../seperator/sep";
import styles from "./work.module.css";

export const Workshop = () => {
  function handleCall() {
    try {
      window.open("tel:6123805285");
    } catch {
      console.log("Initiating call failed");
    }
  }

  return (
    <>
      <div className={styles.top}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://fast.wistia.net/embed/iframe/g9mxlmrggp?seo=true"
            title="Marketing Fitness"
            frameBorder="0"
            scrolling="no"
            name="wistia_embed"
          ></iframe>
          <script
            src="https://fast.wistia.net/assets/external/E-v1.js"
            async
          ></script>
        </div>
        <div className={styles.desc}>
          <div className={styles.heading}>
            <h1>2-Day Workshop At Your Business</h1>
            <div className={styles.smspc} />
            <h3>Have Dmitry Lipinskiy come to you</h3>
            <div className={styles.smspc} />
            <h2>$12,000</h2>
          </div>
          <div className={styles.featureList}>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>
                Dmitry will evaluate your overall marketing strategy and
                customize the workshop based on your company’s strengths and
                greatest needs
              </span>
            </div>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>4 hours of Social Media Consulting</span>
            </div>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>4 Hours of Video Content Strategy</span>
            </div>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>
                4 Hours Graphic Design: can apply to rebranding or new marketing
                materials
              </span>
            </div>
            <div className={styles.listItemContainer}>
              <Check width={16} height={16} className={styles.checkIcon} />
              <span>
                4 Hours of implementation; for example, creating ads, filming
                videos, or optimizing online profiles
              </span>
            </div>
          </div>
          <div className={styles.gsb}>
            <button
              aria-label="Call for the price"
              onClick={handleCall}
              className={styles.btn}
            >
              Call for the price
            </button>
          </div>
        </div>
      </div>
      <Sep />
    </>
  );
};

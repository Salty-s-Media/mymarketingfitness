'use client';

import React from 'react';
import styles from './pricing.module.css';
import { Check } from 'lucide-react';
import { Sep } from '../seperator/sep';
import Link from 'next/link';

export const Pricing = () => {
  return (
    <>
      <div id="pricing" />
      <br />
      <div className={styles.topmost}>
        <div className={styles.heading}>
          <div className={styles.heading2}>Pricing</div>
          <h1 className={styles.main}>PICK A PLAN THAT WORKS FOR YOU </h1>
        </div>
        <div className={styles.container}>
          <div className={`${styles.pricingCard} ${styles.plus}`}>
            <div className={styles.cardContent}>
              <div className={styles.head3}>$997</div>
              <div className={styles.price}>Branding &amp; Rebranding</div>
              <div className={styles.midcont}>
                <div className={styles.featureList}>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>5 new videos every week: Monday through Friday</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>280 exclusive videos</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Group Zoom calls replays with Dmitry Lipinskiy</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Access to File Vault: Contracts, estimates, agreements
                      with vendors and employees
                    </span>
                  </div>
                </div>
              </div>
              <br></br>
              <div className={styles.gsbCont}>
                <Link href="https://calendly.com/roofing-insights/demo-call-marketing-fitness">
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      textTransform: 'none',
                      padding: '0.65rem 1rem',
                      marginBottom: '15px',
                      backgroundColor: 'var(--bg-d)',
                      outline: 'var(--btn) 2px solid',
                      borderRadius: '20px',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                    }}
                  >
                    Schedule 10min Demo
                  </div>
                </Link>
                <Link href="https://app.coachcatalyst.com/shared_stripe_product/organization/16296/products/prod_Ql3wr46quS1L8R">
                  <button aria-label="Sign Up" className={styles.getStartedBtn}>
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <p
        style={{
          fontFamily: 'var(--font-oswald)',
          color: 'var(--t-m)',
          textTransform: 'uppercase',
          fontSize: '1rem',
          marginBottom: '0.3rem',
          margin: 'auto',
        }}
      >
        Billed month to month until canceled. Cancel anytime.
      </p>
      <Sep />
    </>
  );
};

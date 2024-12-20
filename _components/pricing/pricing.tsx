"use client";

import React from "react";
import styles from "./pricing.module.css";
import { Check } from "lucide-react";
import { Sep } from "../seperator/sep";
import Link from "next/link";

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
          <div className={`${styles.pricingCard} ${styles.basic}`}>
            <div className={styles.cardContent}>
              <div className={styles.head3}>$97/month</div>
              <div className={styles.price}>Watch &amp; Learn</div>
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
                    <span>200+ exclusive videos per year</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Weekly Zoom group calls with Dmitry: New topic and Q&A
                      session every week
                    </span>
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
            </div>
            <br></br>
            <div className={styles.gsbCont}>
              <Link href="https://app.coachcatalyst.com/shared_stripe_product/#/organization/12307/products/prod_OmBbWAdENbAqAR">
                <button aria-label="Sign Up" className={styles.getStartedBtn}>
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          <div className={`${styles.pricingCard} ${styles.pro}`}>
            <div className={styles.cardContent}>
              <div className={styles.head3}>$397/month</div>
              <div className={styles.price}>Learn &amp; Create</div>

              <div className={styles.midcont}></div>
              <div className={styles.featureList}>
                <div className={styles.listItemContainer}>
                  <Check width={16} height={16} className={styles.checkIcon} />
                  <span>Everything in the previous plan</span>
                </div>
                <div className={styles.listItemContainer}>
                  <Check width={16} height={16} className={styles.checkIcon} />
                  <span>
                    Unlimited graphic design: Logos, vehicle wraps, signs,
                    business cards, custom sales presentations, and more
                  </span>
                </div>
              </div>
            </div>
            <br></br>
            <div className={styles.gsbCont}>
              <Link href="https://app.coachcatalyst.com/shared_stripe_product/#/organization/12307/products/prod_QGj2L4qDA3XXvz">
                <button aria-label="Sign Up" className={styles.getStartedBtn}>
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          <div className={`${styles.pricingCard} ${styles.plus}`}>
            <div className={styles.cardContent}>
              <div className={styles.bestValueSticker}>Best Value</div>
              <div className={styles.head3}>$1497/month</div>
              <div className={styles.price}>Mentorship Plan</div>
              <div className={styles.midcont}>
                <div className={styles.featureList}>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Everything in the previous plans</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Weekly 30-minute one-on-one calls with Dmitry</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Unlimited Video Editing</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Dmitry's cell number for texting 7 days a week for
                      business emergencies or decision-making assistance
                    </span>
                  </div>
                </div>
              </div>
              <br></br>
              <div className={styles.gsbCont}>
                <Link href="https://calendly.com/roofing-insights/demo-call-marketing-fitness">
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      textTransform: "none",
                      padding: "0.65rem 1rem",
                      marginBottom: "15px",
                      backgroundColor: "var(--bg-d)",
                      outline: "var(--btn) 2px solid",
                      borderRadius: "20px",
                      textAlign: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    Schedule 10min Demo
                  </div>
                </Link>
                <Link href="https://app.coachcatalyst.com/shared_stripe_product/#/organization/12307/products/prod_QGj9qlc9nOMpWg">
                  <button aria-label="Sign Up" className={styles.getStartedBtn}>
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.pricingCard} ${styles.plus}`}>
            <div className={styles.cardContent}>
              <div className={styles.head3}>$10000</div>
              <div className={styles.price}>Branding &amp; Rebranding</div>
              <div className={styles.midcont}>
                <div className={styles.featureList}>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Lifetime access to the DirectoriiAds program</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Weekly 30 or 60-minute Zoom calls with Dmitry</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Business name change or search with Dmitry</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Complete brand identity design (Name, logo, 15-18 business
                      essentials like cards, yard signs, vehicle wraps,
                      presentations, legal documents, etc.)
                    </span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Legal document modifications by our lawyer</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Unlimited video editing and YouTube management (optional
                      but included when ready)
                    </span>
                  </div>
                </div>
              </div>
              <br></br>
              <div className={styles.gsbCont}>
                <Link href="https://calendly.com/roofing-insights/demo-call-marketing-fitness">
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      textTransform: "none",
                      padding: "0.65rem 1rem",
                      marginBottom: "15px",
                      backgroundColor: "var(--bg-d)",
                      outline: "var(--btn) 2px solid",
                      borderRadius: "20px",
                      textAlign: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    Schedule 10min Demo
                  </div>
                </Link>
                <Link href="https://app.coachcatalyst.com/shared_stripe_product/#/organization/12307/products/prod_RLQLQI57LF0DOt">
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
          fontFamily: "var(--font-oswald)",
          color: "var(--t-m)",
          textTransform: "uppercase",
          fontSize: "1rem",
          marginBottom: "0.3rem",
          margin: "auto",
        }}
      >
        Billed month to month until canceled. Cancel anytime.
      </p>
      <Sep />
    </>
  );
};

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
          <h3>Pricing</h3>
          <h1 className={styles.main}>PICK A PLAN THAT WORKS FOR YOU </h1>
        </div>
        <div className={styles.container}>
          <div className={`${styles.pricingCard} ${styles.basic}`}>
            <div className={styles.cardContent}>
              <h3>Watch &amp; Learn</h3>
              <div className={styles.price}>
                $97<span className={styles.monthly}>/mo</span>
              </div>
              <div className={styles.midcont}>
                <div className={styles.featureList}>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Weekly program - 5 new videos per week - video with
                      marketing exercises for every day
                    </span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Program never ends</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Dmitry and his team film new relevant content every week
                      for the following week to adopt to ever-changing marketing
                      landscape
                    </span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Weekly group zoom calls to answer all your marketing and
                      lead generation questions
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.gsbCont}>
              <Link href="https://app.coachcatalyst.com/shared_stripe_product/#/organization/12307/products/prod_OmBbWAdENbAqAR">
                <button
                  aria-label="Get Started"
                  className={styles.getStartedBtn}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className={`${styles.pricingCard} ${styles.pro}`}>
            <div className={styles.cardContent}>
              <div className={styles.bestValueSticker}>Best Value</div>
              <h3>Unlimited Video Editing</h3>
              <div className={styles.price}>
                $997<span className={styles.monthly}>/mo</span>
              </div>

              <div className={styles.midcont}></div>
              <div className={styles.featureList}>
                <div className={styles.listItemContainer}>
                  <Check width={16} height={16} className={styles.checkIcon} />
                  <span>Everything in Watch &amp; Learn</span>
                </div>
                <div className={styles.listItemContainer}>
                  <Check width={16} height={16} className={styles.checkIcon} />
                  <span>Weekly 15min Zoom calls with Dmitry</span>
                </div>
                <div className={styles.listItemContainer}>
                  <Check width={16} height={16} className={styles.checkIcon} />
                  <span>Unlimited graphic design</span>
                </div>
                <div className={styles.listItemContainer}>
                  <Check width={16} height={16} className={styles.checkIcon} />
                  <span>
                    Unlimited video editing, including help with optimizing and
                    publishing content on your YouTube channel
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.gsbCont}>
              <Link href="https://app.coachcatalyst.com/shared_stripe_product/#/organization/12307/products/prod_PwV8ey6HvVA1DU">
                <button
                  aria-label="Get Started"
                  className={styles.getStartedBtn}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div className={`${styles.pricingCard} ${styles.plus}`}>
            <div className={styles.cardContent}>
              <h3>Complete Branding/Rebranding</h3>
              <div className={styles.price}>
                $1497<span className={styles.monthly}>/mo</span>
              </div>
              <div className={styles.midcont}>
                <div className={styles.featureList}>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Everything in Unlimited Video Editing</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>Weekly 30min zoom calls with Dmitry or team</span>
                  </div>
                  <div className={styles.listItemContainer}>
                    <Check
                      width={16}
                      height={16}
                      className={styles.checkIcon}
                    />
                    <span>
                      Complete rebranding: new logo design, name change, 1 on 1
                      consultation and brain storming session with Dmitry and
                      team
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.gsbCont}>
                <Link href="https://app.coachcatalyst.com/shared_stripe_product/#/organization/12307/products/prod_PwVFHJwp0Md1vJ">
                  <button
                    aria-label="Get Started"
                    className={styles.getStartedBtn}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sep />
    </>
  );
};

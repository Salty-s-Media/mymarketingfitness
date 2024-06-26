"use client";

import React, { useState } from "react";
import styles from "./system.module.css";
import { Sep } from "../seperator/sep";
import { ChevronDown, ChevronUp } from "lucide-react";

export const System = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const toggleDay = (index: number) => {
    setActiveDay((prevActiveDay) => (prevActiveDay === index ? null : index));
  };

  return (
    <>
      <div className={styles.top}>
        <div className={styles.heading}>
          <div className={styles.heading2}>System</div>
          <div className={styles.main}>
            FIVE MARKETING EXERCISES PER WEEK THAT ONLY TAKE 10-30 MINUTES PER
            DAY
          </div>
        </div>
        <div className={styles.systemcontainer}>
          {dayNames.map((day, index) => (
            <div className={styles.day} key={index}>
              <div
                className={styles.dayheader}
                onClick={() => toggleDay(index)}
              >
                <div className={styles.dayheader2}>{day}</div>
                <div className={styles.chevronIcons}>
                  {activeDay === index ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
              <div
                className={
                  activeDay === index
                    ? `${styles.tasklist} ${styles.visible}`
                    : styles.tasklist
                }
              >
                {index === 0 && (
                  <>
                    <div className={styles.head3}>SOCIAL MEDIA MARKETING</div>
                    <div className={styles.task}>
                      Stay updated on current trends across Facebook, TikTok,
                      Instagram, and YouTube. Gain hands-on experience creating
                      and timing posts to effectively connect with your audience
                      and boost engagement.
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className={styles.head3}>SEARCH RESULTS MARKETING</div>
                    <div className={styles.task}>
                      Increase your online visibility with us. In these brief
                      but impactful sessions, you'll learn to navigate Google
                      and other search engines, improving your rankings and
                      making your business easier to find.
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className={styles.head3}>TRADITIONAL MARKETING</div>
                    <div className={styles.task}>
                      Join us as we explore traditional marketing strategies,
                      diving deep into data and best practices. We'll cover
                      effective use of billboards, yard signs, flyers, radio,
                      TV, print, and more to maximize your marketing reach.
                    </div>
                  </>
                )}
                {index === 3 && (
                  <>
                    <div className={styles.head3}>
                      VIDEO CONTENT CREATION DAY
                    </div>
                    <div className={styles.task}>
                      Don't skip Video Day, your weekly 'workout' for video
                      content creation. Dmitry will help build your on-camera
                      confidence, providing guidance on when and where to post
                      videos, and how to craft content that converts.
                    </div>
                  </>
                )}
                {index === 4 && (
                  <>
                    <div className={styles.head3}>
                      NICHE MARKETPLACE MASTERY
                    </div>
                    <div className={styles.task}>
                      Master popular digital marketplaces in our weekly
                      sessions. Dmitry will guide you on making the most of
                      platforms like Thumbtack, Yelp, Google Guarantee,
                      Directorii, and others, with a focus on boosting lead
                      generation.
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Sep />
    </>
  );
};

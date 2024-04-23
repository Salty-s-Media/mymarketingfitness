"use client";

import { Sep } from "../seperator/sep";
import VideoCarousel from "../videoCarousel/videos";
import styles from "./success.module.css";

export const Success = () => {
  const videos = [
    { src: "https://fast.wistia.net/embed/iframe/e60rikpvts?seo=true" },
    { src: "https://fast.wistia.net/embed/iframe/an97adelc3?seo=true" },
    { src: "https://fast.wistia.net/embed/iframe/fk97xbxsqv?seo=true" },
    { src: "https://fast.wistia.net/embed/iframe/twsc5c6bjb?seo=true" },
    { src: "https://fast.wistia.net/embed/iframe/qof2gpyj67?seo=true" },
    { src: "https://fast.wistia.net/embed/iframe/9z8wabe1fk?seo=true" },
    { src: "https://fast.wistia.net/embed/iframe/c47ms1qz71?seo=true" },
  ];

  return (
    <>
      <div className={styles.top}>
        <div className={styles.heading}>
          <div className={styles.heading2}>Success</div>
          <h1 className={styles.mainh1}>
            REAL BUSINESSES, REAL CHANGES: SEE THE CHANGE IN YOUR BUSINESS TODAY
          </h1>
        </div>
        <VideoCarousel videos={videos} />
      </div>
      <Sep />
    </>
  );
};

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./about.module.css";
import { Sep } from "../seperator/sep";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useEffect(() => {
    const animWrapper = document.querySelector(".gc");

    const trigger = ScrollTrigger.create({
      trigger: ".ac",
      pin: false,
      start: "top bottom",
      end: "+=5",
    });

    let tl = gsap.timeline();

    tl.to(animWrapper, {
      y: "-25",
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".ac",
      start: () => trigger?.start,
      end: () => trigger?.end,
      scrub: 1,
    });

    return () => {
      trigger?.kill();
      tl.kill();
    };
  }, []);
  return (
    <div className="gc">
      <Sep />
      <div className="ac">
        <div className={styles.container}>
          <div className={styles.headingContainer}>
            <h3 className={styles.heading}>About</h3>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
              <Image
                src="/about.png"
                width={920}
                height={1080}
                alt="about"
                className={styles.image}
              />
            </div>
            <div className={styles.textbox}>
              <p className={styles.description}>
                Dmitry Lipinskiy, originally from Siberia, stumbled into the
                trades upon moving to the USA with a teacher's degree. Starting
                with a flooring company in Atlanta and later a roofing business
                in Minneapolis, he discovered a passion for marketing and
                branding.
                <br />
                <br />
                Leveraging his creative skills, he excelled in making his
                businesses thrive. In 2020, Dmitry sold his roofing business to
                focus on teaching contractors effective modern digital marketing
                strategies.
                <br />
                <br />
                As a former teacher, he is dedicated to empowering business
                owners to craft compelling narratives and build resilient brands
                without resorting to traditional door knocking and cold calling.
                He emphasizes storytelling, brand building, and organic content
                over traditional methods like door knocking and cold calling.
              </p>
              <div className={styles.ctaContainer}>
                <Link href="/#pricing">
                  <button aria-label="Get Started" className={styles.ctaButton}>
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Sep />
      </div>
    </div>
  );
};

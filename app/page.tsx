import styles from "./page.module.css";
import "../app/globals.css";
import { Logo } from "@/_components/logo/logo";
import { Navbar } from "@/_components/navbar/navbar";
import { Video } from "@/_components/video/video";
import { About } from "@/_components/about/about";
import { Footer } from "@/_components/footer/footer";
import { System } from "@/_components/system/system";
import { Pricing } from "@/_components/pricing/pricing";
import { Success } from "@/_components/success/success";
import { EndCta } from "@/_components/bottomcta/end-cta";
import { Workshop } from "@/_components/workshop/workshop";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.navarea}>
        <Logo />
        <Navbar />
      </div>
      <div className={styles.page}>
        <h1 className={`${styles.pageh1} ${"osw"}`}>
          Daily marketing sessions guaranteed to bring you more business.
        </h1>
        <div id="video" />
        <p className={`${styles.pagep} ${"intr"}`}>
          Join our daily marketing sessions led by seasoned entrepreneur Dmitry
          Lipinskiy, for hands-on lessons designed to drive your business growth
          and attract more customers.
        </p>
        <div className={styles.ctaBtns}>
          <Link href="/#pricing">
            <button aria-label="Get Started" className={styles.ctaButton}>
              Get Started Now
            </button>
          </Link>
          <Link href="/#video">
            <button
              aria-label="Watch Video"
              className={styles.ctaButtonSecondary}
            >
              Watch Video
            </button>
          </Link>
        </div>
        <Video />
        <About />
        <System />
        <Pricing />
        <Success />
        <Workshop />
        <EndCta />
        <Footer />
      </div>
    </>
  );
}

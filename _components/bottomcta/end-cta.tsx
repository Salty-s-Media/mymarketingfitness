import Image from "next/image";
import { Sep } from "../seperator/sep";
import styles from "./end.module.css";
import Link from "next/link";

export const EndCta = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.overlayer}>
          <img
            src="https://assets-global.website-files.com/648b507c4c7baebdb3c8d0c2/649601df3d2785b147e5c043_photo_2023-06-23%2010.15.37.jpeg"
            loading="lazy"
            alt="bg"
            width="100%"
            height="100%"
            className={styles.bgimg}
          />
          <div className={styles.overlay}></div>
          <div className={styles.contentOnTop}>
            <h1 className={styles.heading}>
              MAKE MARKETING YOUR COMPANY PART OF YOUR DAILY ROUTINE
            </h1>
            <Link href="/#pricing">
              <button aria-label="Join" className={styles.joinButton}>
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Sep />
    </>
  );
};

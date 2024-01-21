import Image from "next/image";
import logo from "../../public/logo.svg";
import styles from "../../app/page.module.css";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className={styles.log}>
      <Image src={logo} alt="logo" className={styles.logo} />
    </Link>
  );
};

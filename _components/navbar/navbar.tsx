"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { MenuSquare, Phone, XSquare } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.mobilemenu}>
        <button
          aria-label="Open Mobile Menu"
          className={styles.obtn}
          onClick={toggleMenu}
        >
          <MenuSquare />
        </button>
        {isMenuOpen && (
          <div className={styles.mobilemenuContent}>
            <Link href="/#pricing">
              <button
                aria-label="Pricing"
                onClick={toggleMenu}
                className={styles.cbtn}
              >
                Pricing
              </button>
            </Link>
            <Link href="http://marketingfitness.coachcatalyst.com/">
              <button
                aria-label="Login"
                onClick={toggleMenu}
                className={styles.cbtn}
              >
                Login
              </button>
            </Link>
            <button
              aria-label="Call Dmitry"
              className={styles.cbtn}
              onClick={toggleModal}
            >
              Call Dmitry <Phone width={12} height={12} />
            </button>
            <button
              aria-label="Close Mobile Menu"
              className={styles.ebtn}
              onClick={toggleMenu}
            >
              <XSquare />
            </button>
          </div>
        )}
      </div>
      <div
        className={`${styles.menu} ${isMenuOpen ? styles.hideDesktopMenu : ""}`}
      >
        <Link href="/#pricing" className={styles.hoverUnderline}>
          Pricing
        </Link>
        <Link
          href="http://marketingfitness.coachcatalyst.com/"
          className={styles.hoverUnderline}
        >
          Login
        </Link>
      </div>
      {isModalOpen && (
        <a href="/">
          <div className={styles.overlay} id="overlay"></div>
        </a>
      )}
      {isModalOpen && (
        <div className={styles.modal} id="Modal">
          <h1>Consultations</h1>
          <br />
          <p>
            Dmitry will call you at the requested time to go over your
            questions. Please have notes prepared.
          </p>
          <br />
          <br />
          <h3>30-Minute Zoom Call, $299</h3>
          <Link href="https://calendly.com/roofing-insights/dmitry-s-consultation-30-min">
            <button aria-label="Book Now" className={styles.mbtn}>
              Book Now
            </button>
          </Link>
          <h3>60-Minute Zoom Call, $499</h3>
          <Link href="https://calendly.com/roofing-insights/60-min-zoom-consultation-clone">
            <button aria-label="Book Now" className={styles.mbtn}>
              Book Now
            </button>
          </Link>
          <div className={styles.spc}>
            <button
              aria-label="Close"
              className={styles.cmbtn}
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <button
        aria-label="Schedule Call"
        className={styles.booking}
        onClick={toggleModal}
      >
        Schedule Call
      </button>
    </>
  );
};

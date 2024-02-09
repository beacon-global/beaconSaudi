import Image from "next/image";
import styles from "./footer.module.css";
import React from "react";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topContainer}>
        <div className={styles.footerLogoContainer}>
          <Image
            quality={100}
            priority={true}
            unoptimized
            src="/Footer/beaconWhite.svg"
            width={170}
            height={60}
            alt="ImageFooter1"
          />
        </div>
        <div className={styles.footerContentContainer}>
          <ul className={styles.footercontent}>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/pages/About">
              <p>About Us</p>
            </a>
            <a href="/pages/Services">
              <p>Services</p>
            </a>
            <a href="/">
              <p>Blogs</p>
            </a>
            <a href="/pages/Contact">
              <p>Contact</p>
            </a>
          </ul>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.footerContactImgContainer}>
          <div className={styles.footerContactDetails}>
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/Footer/hh/Icon-1.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <div className={`${styles.footerContactTextDetails} ${styles.footerContactTextDetailsEmail}`}>
              <p>Email us:</p>
              <a
                href="mailto:info@bmcglobal.co"
                style={{ textTransform: "none" }}
              >
                info@bmcglobal.co
              </a>
            </div>
          </div>
          <div className={styles.footerContactDetails}>
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/Footer/hh/Icon.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <div
              className={styles.footerContactTextDetails}
              style={{ whiteSpace: "nowrap" }}
            >
              <p>Call us on:</p>
              <a href="tel:+ 966 570 807 175">
                <p>+ 966 570 807 175</p>
              </a>
            </div>
          </div>
          <div className={styles.footerContactDetails}>
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/Footer/hh/Icon-2.svg"
              width={46}
              height={46}
              alt="ImageFooter2"
            />
            <a href="https://maps.app.goo.gl/UzvX5K7o9c3Cepmx9">
              <div className={styles.footerContactTextDetails}>
                <p>Head Office:</p>
                <p className={styles.dAddress}>
                  Building no. 4626, Hamza Shehatah St,
                  <br /> Al-Baghdadiyah Al-Gharbiyah, Jeddah 22235
                </p>
                <p className={styles.mAddress}>
                  Building no. 4626, Hamza Shehatah St, Al-Baghdadiyah
                  Al-Gharbiyah, Jeddah 22235
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.footerSocialContainer}>
          <a href="">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className={styles.socialIcons}
              src="/Footer/hh/Icon-3.svg"
              width={46}
              height={46}
              alt="ImageFooter3"
            />
          </a>
          <a href="https://instagram.com/beaconglobal.co?igshid=OGQ5ZDc2ODk2ZA==">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className={styles.socialIcons}
              src="/Footer/hh/Icon-4.svg"
              width={46}
              height={46}
              alt="ImageFooter4"
            />
          </a>
          <a href="">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className={styles.socialIcons}
              src="/Footer/hh/Icon-5.svg"
              width={46}
              height={46}
              alt="ImageFooter5"
            />
          </a>
          <a href="https://www.linkedin.com/company/beacon-management-consultants/">
            <Image
              quality={100}
              priority={true}
              unoptimized
              className={styles.socialIcons}
              src="/Footer/hh/Icon-6.svg"
              width={46}
              height={46}
              alt="ImageFooter6"
            />
          </a>
        </div>
      </div>
      <hr className={styles.footerHr} />
      <div className={styles.footerCopyRightContainer}>
        <p className={styles.footerCopyRight}>
          © 2023 by Beacon Management Consultants CO.LTD | All Right Reserved |
          Powered by{" "}
          <a href="https://procube.cx/" className={styles.footerLink}>
            procube.cx
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

"use client";
import React, { useState } from "react";
import styles from "../../styles/servicesPage.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/app/components/Header/Header";
import MobileHeader from "@/app/components/MobileHeader/MobileHeader";
import Container7 from "@/app/components/Container7/Container7";
import Footer from "@/app/components/Footer/Footer";
import Container6 from "@/app/components/Container6/Container6";
import {
  container2,
  container4,
  servicePageCard,
} from "@/app/contents/ServicePage";
import {
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import ContactBanner from "@/app/components/ContactBanner/ContactBanner";

// const Header = dynamic(() => import("@/app/components/Header"));
// const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
// const Procedures = dynamic(() => import("@/app/components/Procedures"));
// const Faq = dynamic(() => import("@/app/components/Faq"));
// const Footer = dynamic(() => import("@/app/components/Footer"));

function Services() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.servicePageMainContainer}>
        <Container6 data={servicePageCard} servicePage={true} />

        <div className={styles.servicesPageContainer2}>
          <div className={styles.container2Contents}>
            <SectionTitle
              sectionText={container2.sectionTitle}
              padding="0 0 1.3227513227513228vw  0"
            />
            <SectionDescription
              sectionText={container2.description}
              color="#58595B"
            />
          </div>
          <div className={styles.servicePageImageContainer2}>
            <Image
              src={container2.img}
              width={576}
              height={540}
              layout="responsive"
              alt="serviceImg13"
              quality={100}
              priority={true}
              unoptimized
              style={{ display: loaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          </div>
        </div>

        <div className={styles.procedures}>
          <Image
            src="/ServicesPage/3.png"
            width={576}
            height={540}
            layout="responsive"
            alt="serviceImg13"
            quality={100}
            priority={true}
            unoptimized
            className={styles.proceduresBgImg}
          />
          <Image
            src="/ServicesPage/4.png"
            width={576}
            height={540}
            layout="responsive"
            alt="serviceImg13"
            quality={100}
            priority={true}
            unoptimized
            className={styles.proceduresSmImg}
          />
        </div>

        <div className={styles.container4}>
          <div className={styles.background}></div>
          <div className={styles.container4ImgContainer}>
            <Image
              src={container4.img}
              width={500}
              height={500}
              layout="responsive"
              alt="aboutus2"
              quality={100}
              priority={true}
              unoptimized
              onLoad={handleImageLoad}
            />
          </div>
          <div className={styles.container4Contents}>
            <SectionTitle
              sectionText={container4.sectionTitle}
              padding="0 0 1.3227513227513228vw  0"
              width="28.04232804232804vw"
            />
            <SectionDescription
              sectionText={container4.description}
              color="#58595B"
              width="36.11111111111111vw"
            />
          </div>
        </div>
        <Container7 />
        <ContactBanner />
        <Footer />
      </div>
    </>
  );
}

export default Services;

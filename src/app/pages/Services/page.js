"use client";
import React, { useState } from "react";
import styles from "../../styles/servicesPage.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/app/components/WhySaudiInner/Header/Header";
import MobileHeader from "@/app/components/WhySaudiInner/MobileHeader/MobileHeader";
import Container7 from "@/app/components/WhySaudiInner/Container7/Container7";
import Footer from "@/app/components/WhySaudiInner/Footer/Footer";
import Container6 from "@/app/components/WhySaudiInner/Container6/Container6";
import {
  container2,
  container4,
  servicePageCard,
} from "@/app/contents/ServicePage";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "@/app/components/ButtonComponent";
import ContactBanner from "@/app/components/WhySaudiInner/ContactBanner/ContactBanner";

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
              padding="1.3227513227513228vw"
            />
            <a href="../../pages/WhySaudi">
              <BtnComponent
                buttonText="Vision 2030"
                bg="#11215B"
                arrow={true}
                color="#ffffff"
                margin="0 auto"
              />
            </a>
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
            src="/ServicesPage/3.webp"
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
            src="/ServicesPage/4.webp"
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
              padding="1.3227513227513228vw"
              margin={"0 0 3.3227513227513228vw 0"}
            />
            <a href="../../pages/Contact">
              <BtnComponent
                buttonText="Get In Touch"
                bg="#11215B"
                arrow={true}
                color="#ffffff"
                margin="0 auto"
              />
            </a>
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

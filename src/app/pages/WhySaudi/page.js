"use client"
import Banner from "@/app/components/Banner";
import Clients from "@/app/components/ClientsContainer/Clients";
import Popup from "@/app/components/Common/Popup";
import WhatsAppChat from "@/app/components/WhatsAppChat/WhatsAppChat";
import ContactBanner from "@/app/components/WhySaudiInner/ContactBanner/ContactBanner";
import Container2 from "@/app/components/WhySaudiInner/Container2/Container2";
import Container3 from "@/app/components/WhySaudiInner/Container3/Container3";
import Container4 from "@/app/components/WhySaudiInner/Container4/Container4";
import Container5 from "@/app/components/WhySaudiInner/Container5/Container5";
import Container6 from "@/app/components/WhySaudiInner/Container6/Container6";
import Container7 from "@/app/components/WhySaudiInner/Container7/Container7";
import Footer from "@/app/components/WhySaudiInner/Footer/Footer";
import Header from "@/app/components/WhySaudiInner/Header/Header";
import Hero from "@/app/components/WhySaudiInner/Hero/Hero";
import MobileHeader from "@/app/components/WhySaudiInner/MobileHeader/MobileHeader";
import { container6 } from "@/app/contents/Data";
import styles from "../../styles/loadinganimation.module.css";
import React, { useEffect, useState } from "react";
import LoadingCircle from "@/app/components/LoadingAnimation/LoadingCircle";

const Page = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Growth", "Success", "Strategy", "Expansion"];
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const whiteScreen = document.querySelector(".whiteScree");
      if (whiteScreen) {
        // whiteScreen.style.opacity = '0';
        whiteScreen.classList.add("hidden");
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 450);

    return () => clearInterval(interval);
  }, [textOptions.length]);


  return (
    <div>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
      <div className={`${styles.whiteScreen} whiteScree`}>
        <LoadingCircle />
        <div className={styles.changeTextContainer}>
          <h1 className={styles.spinnerText}>Your Global Advisory Partner For</h1>
          <h1 className={styles.changeText}>
            <span className={styles.spinnerText}> Business </span>{" "}
            {textOptions[textIndex]}
          </h1>
        </div>
      </div>

      <WhatsAppChat beaconSaudi="true" />
      <Header phoneNumber="+971 527 733 789" />
      <MobileHeader />
      <Hero />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      {/* <Container6 data={container6} /> */}
      <Clients whySaudi={true} />
      <Banner />
      <Container7 />
      <ContactBanner />
      <Footer contactNumber="+971 527 733 789" email="mail@beaconarabia.com"
        address="Office #39, 7th Floor,Dubai National Insurance Building, Port Saeed Deira, Dubai, UAE" />
    </div>
  );
};

export default Page;

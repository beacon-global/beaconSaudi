"use client";
import Header from "./components/WhySaudiInner/Header/Header";
import Footer from "./components/WhySaudiInner/Footer/Footer";
import MobileHeader from "./components/WhySaudiInner/MobileHeader/MobileHeader";
import Hero from "./components/Hero/Hero";
import { container6 } from "./contents/MainPage";
import Container6 from "./components/Container6/Container6";
import Container4 from "./components/Container4/Container4";
import Container2 from "./components/Container2/Container2";
import Clients from "./components/ClientsContainer/Clients";
import Container7 from "./components/WhySaudiInner/Container7/Container7";
import ContactBanner from "./components/WhySaudiInner/ContactBanner/ContactBanner";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";
import LoadingCircle from "./components/LoadingAnimation/LoadingCircle";
import { useEffect, useState } from "react";
import styles from "./styles/loadinganimation.module.css";
import Popup from "./components/Common/Popup";

export default function Home() {
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
    <>
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
      <Header phoneNumber="+971 568 352 250" />
      <MobileHeader />
      <WhatsAppChat />
      <Hero />
      <Container6 data={container6} />
      <Container4 />
      <Container2 />
      <Clients />
      <Container7 />
      <ContactBanner />
      <Footer contactNumber="+971 527 733 789" email="mail@beaconarabia.com"
        address="Office #39, 7th Floor,Dubai National Insurance Building, Port Saeed Deira, Dubai, UAE" />
    </>
  );
}

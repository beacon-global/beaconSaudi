import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";
import hero from "./img/hero.png";
import { BtnComponent, SectionDescription } from "../ButtonComponent";
// import btnImg from "../../../../../public/Hero/btnImage.svg";

const Hero = () => {
  return (
    <div className={styles.container1}>
      <Image
        src={hero}
        className={styles.heroImage}
        quality={100}
        priority={true}
        unoptimized
        alt="hero"
      />
      <div className={styles.contentContainer}>
        <h1>Start Your Business Presence in Saudi Arabia</h1>
        <SectionDescription
          sectionText="Establishing your business in KSA can be overwhelming without proper assistance. From organizing group entities to maintaining rigorous corporate governance, navigating these challenges requires reliable support."
          color="rgba(255,255,255,0.8)"
        />
        <a href="pages/WhySaudi">
          <BtnComponent
            buttonText="Discover Saudi's Advantages"
            bg="#11215B"
            arrow={true}
            color="#ffffff"
            margin="0 auto"
            width="23.3333vw"
            height="4.6375661375661372vw"
            width_m={"100%"}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;

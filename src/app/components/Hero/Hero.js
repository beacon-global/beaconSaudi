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
        <h1>Setup Your Business in Saudi Arabia</h1>
        <SectionDescription
          sectionText="Setting up business in KSA might seem hectic without legitimate support. From streamlining the group entities to ensuring high-end corporate governance"
          color="rgba(255,255,255,0.8)"
        />
        <a href="pages/WhySaudi">
          <BtnComponent
            buttonText="Why Saudi"
            bg="#11215B"
            arrow={true}
            color="#ffffff"
            margin="0 auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;

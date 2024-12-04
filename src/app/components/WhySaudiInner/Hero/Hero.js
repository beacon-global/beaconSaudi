import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";
import { BtnComponent, SectionDescription } from "../../ButtonComponent";
import hero from "../../../../../public/Hero/1.png";
import btnImg from "../../../../../public/Hero/btnImage.svg";

const Hero = () => {
  return (
    <div className={styles.container1}>
      <Image
        src={hero}
        className={styles.heroImage}
        quality={75}
        priority={true}
        alt="hero"
      />
      <div className="overlayHero" />
      <div className={styles.contentContainer}>
        <h1>Saudi Vision 2030</h1>
        <SectionDescription
          sectionText="A transformative journey towards a vibrant society, a thriving economy, and an ambitious nation."
          width="34.32539682539682vw"
          margin="1.3227513227513228vw 0vw 0 0vw"
          color="rgba(255,255,255,0.8)"
        />
        <a href="/pages/Contact/">
          <div className={`${styles.btnMargin} whySaudiBtnContainer`}>
            <BtnComponent
              buttonText="Book a Call"
              bg="#11215B"
              arrow={true}
              color="#ffffff"
              margin="0 auto"
            />
          </div>
        </a>
      </div>
      <div className={styles.btnImageContainer}>
        {/* <Image
          src={btnImg}
          className={styles.btnImage}
          quality={100}
          priority={true}
          unoptimized
          alt="heroBtnImage"
        /> */}

      </div>
    </div>
  );
};

export default Hero;

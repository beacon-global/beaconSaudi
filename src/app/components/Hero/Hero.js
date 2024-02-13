import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";
import { SectionDescription } from "../ButtonComponent";
import hero from "../../../../public/Hero/hero.png";
import btnImg from "../../../../public/Hero/btnImage.png";

const Hero = () => {
  return (
    <div className={styles.container1}>
      <Image
        src={hero}
        className={styles.heroImage}
        quality={100}
        priority={true}
        unoptimized
      />
      <div className={styles.contentContainer}>
        <h1>Saudi Vision 2030</h1>
        <SectionDescription
          sectionText="Lorem ipsum dolor sit amet consectetur. Id habitant pellentesque feugiat aliquam mattis bibendum arcu quis dis at risus sodales. Interdum iaculis libero at at."
          width="34.32539682539682vw"
          margin="1.3227513227513228vw 0vw 0 0vw"
          color="rgba(255,255,255,0.8)"
        />
      </div>
      <div className={styles.btnImageContainer}>
        <Image
          src={btnImg}
          className={styles.btnImage}
          quality={100}
          priority={true}
          unoptimized
          alt="heroBtnImage"
        />
      </div>
    </div>
  );
};

export default Hero;

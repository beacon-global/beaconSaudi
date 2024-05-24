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
        <h1>The Future is Here.<br/> Be Part of It.</h1>
        <SectionDescription
          sectionText="Starting a business in KSA can be challenging without proper assistance . From setting up your company to maintaining corporate governance, you need reliable support to navigate these complexities. Enter the largest market in GCC with trusted partners."
          color="rgba(255,255,255,0.8)"
        />
        <a href="pages/WhySaudi">
          <BtnComponent
            buttonText=" Explore Saudi Arabia"
            bg="#11215B"
            arrow={true}
            color="#ffffff"
            margin="0 auto"
            width="18.3333vw"
            height="4.6375661375661372vw"
            width_m={"100%"}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import styles from "./container4.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";
import Image from "next/image";
import { container4 } from "@/app/contents/MainPage";

const Container4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={container4.img}
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
          alt="bgImage"
          className={styles.bigImage}
        />
      </div>
      <div className={styles.contentContainer}>
        <SectionTitle
          sectionText={container4.sectionTitle}
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText={container4.description}
          padding="1.984126984126984vw"
        />
        <a href="pages/WhySaudi">
          <BtnComponent
            buttonText={container4.btnText}
            bg="transparrent"
            borderColor="#02040E"
            arrow={true}
            color="#02040E"
            btnFill={true}
          />
        </a>
      </div>
    </div>
  );
};

export default Container4;

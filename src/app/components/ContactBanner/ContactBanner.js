import React from "react";
import styles from "./contactbanner.module.css";
import Image from "next/image";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";
import { contactBanner } from "@/app/contents/Data";

const ContactBanner = () => {
  return (
    <div className={styles.container}>
      <Image
        src={contactBanner.img}
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
        alt="contactBanner"
        className={styles.frontImg}
      />
      <div className={styles.contactContent}>
        <SectionTitle
          sectionText={contactBanner.sectionTitle}
          color="#fff"
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText={contactBanner.description}
          color="#fff"
          padding="1.984126984126984vw"
          width="40.67460317460318vw"
        />
        <a href="tel:966 570 807 175">
          <BtnComponent
            buttonText={contactBanner.btnText}
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

export default ContactBanner;

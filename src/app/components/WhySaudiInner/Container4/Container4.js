import React from "react";
import styles from "./container4.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../../ButtonComponent";
import { container4 } from "@/app/contents/Data";
import Image from "next/image";

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
        <Image
          src={container4.smImg}
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
          alt="smImage"
          className={styles.smallImage}
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
        <div className={styles.descriptionCards}>
          {container4.descriptions.map((data, index) => (
            <div className={styles.descriptionCard} key={index}>
              <Image
                src="/Container4/check.svg"
                width={100}
                height={100}
                quality={100}
                priority={true}
                unoptimized
                alt="smImage"
                className={styles.check}
              />
              <SectionDescription
                sectionText={data}
              />
            </div>
          ))}
        </div>
        {/* <a href="../../pages/Contact"> */}
        <a href="tel:+971527733789">
          <div className={styles.btnMargin}>
            <BtnComponent
              buttonText={container4.btnText}
              margin="1.984126984126984vw 0 0 0"
              bg="transparrent"
              borderColor="#02040E"
              arrow={true}
              color="#02040E"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Container4;

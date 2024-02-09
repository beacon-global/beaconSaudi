import React from "react";
import styles from "./container3.module.css";
import { CardHeading, SectionDescription, SectionName, SectionTitle } from "../ButtonComponent";
import { container3 } from "@/app/contents/Data";
import Image from "next/image";

const Container3 = () => {
  const cardData = container3.cardData;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container3.sectionName} />
        <SectionTitle
          sectionText={container3.sectionTitle}
          padding="0.6613756613756614vw 0 4.62962962962963vw 0"
        />
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={data.img}
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
              alt={index}
            />
            <div className={styles.cardContent}>
              <CardHeading
                sectionText={data.cardHeading}
                padding="0 0 0.992063492063492vw 0"
                color="#fff"
              />
              <SectionDescription
                sectionText={data.description}
                color="rgba(255,255,255,0.8)"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container3;

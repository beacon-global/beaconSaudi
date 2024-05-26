"use client";
import React, { useState } from "react";
import styles from "./container2.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../../ButtonComponent";
import { container2 } from "@/app/contents/Data";
import Image from "next/image";
import ArrowButtons from "../../ArrowButtons2";
import { useWindowSize } from "@/app/utils.js/windowSize";

const Container2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { windowSize, isSmallScreen } = useWindowSize();

  const cardData = container2.cardData;
  const totalData = container2.cardData.length;
  const clicks = isSmallScreen ? totalData - 1 : totalData - 1;
  const dynamicValue = isSmallScreen ? 66 : 30.079365079

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log("clicked1")
      console.log(currentIndex)
    } else {
      setCurrentIndex(0);
      console.log("clicked2")
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };
 
 4;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container2.sectionName} />
        <SectionTitle
          sectionText={container2.sectionTitle}
          padding="0.6613756613756614vw 0 4.62962962962963vw 0"
        />
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            style={{
              transform: `translateX(-${currentIndex * dynamicValue}vw)`,
              transition: "transform .8s ease",
            }}
          >
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
              />
              <SectionDescription
                sectionText={data.description}
                color="#58595B"
              />
            </div>
          </div>
        ))}
      </div>
      <ArrowButtons
        prevImage={prevImage}
        nextImage={nextImage}
        margin="4.12962962962963vw 0 0 0"
      />
    </div>
  );
};

export default Container2;

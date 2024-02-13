"use client";
import React, { useState } from "react";
import styles from "./container5.module.css";
import { container5 } from "@/app/contents/Data";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import Image from "next/image";
import ArrowButtons from "../ArrowButtons";
import { useWindowSize } from "@/app/utils.js/windowSize";

const Container5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { windowSize, isSmallScreen } = useWindowSize();
  const cardData = container5.cardData;
  const totalData = container5.cardData.length;
  // const clicks = totalData - 3;
  const clicks = isSmallScreen ? totalData - 1 : totalData - 3;
  const dynamicValue = isSmallScreen ? 47 : 30.079365079;

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log("clicked1");
      console.log(currentIndex);
    } else {
      setCurrentIndex(0);
      console.log("clicked2");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container5.sectionName} />
        <SectionTitle
          sectionText={container5.sectionTitle}
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
              className={styles.frontImg}
            />
            <div className={styles.cardContent}>
              <CardHeading
                sectionText={data.cardHeading}
                color="#fff"
                padding="0 0 1.3227513227513228vw 0"
                textAllign="center"
              />
              <SectionDescription
                sectionText={data.description}
                color="rgba(255,255,255,0.8)"
                textAllign="center"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.carouselButtonContainer}>
        <div
          onClick={prevImage}
          className={`${styles.carouselButtonContainerLeft} ${styles.carouselHover}`}
        >
          <Image
            width={377}
            height={420}
            src="/leftGreaterThanArrowPurple.svg"
            alt="arrow"
            className={styles.arrow}
          />
        </div>
        <div
          onClick={nextImage}
          className={`${styles.carouselButtonContainerRight} ${styles.carouselHover}`}
        >
          <Image
            width={377}
            height={420}
            src="/RightGreaterThanArrowPurple.svg"
            alt="arrow"
            className={styles.arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Container5;

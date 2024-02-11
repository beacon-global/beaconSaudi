"use client";

import React, { useState } from "react";

import Image from "next/image";
import styles from "./container7.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container7 } from "@/app/contents/Data";

const Container7 = () => {
  const cardData = container7.faqData;
  const initialVisibleState = Array(cardData.length).fill(false);
  initialVisibleState[0] = true;
  const [answerVisible, setAnswerVisible] = useState(initialVisibleState);

  const handleClick = (index) => {
    setAnswerVisible((prevVisible) => {
      const newVisible = Array(cardData.length).fill(false);
      newVisible[index] = !prevVisible[index];
      return newVisible;
    });
  };

  return (
    <div className={styles.container7}>
      <div className={styles.faqContainer}>
        <div className={styles.firstCol}>
          <div className={styles.title}>
            <SectionName sectionText={container7.sectionName} />
            <SectionTitle
              sectionText={container7.sectionTitle}
              padding="0.6613756613756614vw 0 4.62962962962963vw 0"
            />
          </div>
        </div>
        <div className={styles.secondCol}>
          {cardData.map((data, index) => (
            <div className={styles.faqDataCard} key={index}>
              <div className={styles.countContainer}>
                <CardHeading sectionText={data.number} color="#11215B" />
              </div>
              <div className={styles.questionAnswerContainer}>
                <div className={styles.questionContainer}>
                  <CardHeading
                    sectionText={data.question}
                    width="45.63492063492063vw"
                    weight="500"
                  />
                  <div
                    className={styles.plusIcon}
                    onClick={() => handleClick(index)}
                    style={{
                      transform: answerVisible[index]
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                      transition: "transform .5s ease",
                    }}
                  >
                    <Image
                      src="/+.svg"
                      width={16}
                      height={16}
                      alt="ImageFaq"
                      className={styles.openCloseIcon}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.answerContainer} ${
                    answerVisible[index] ? styles.visible : ""
                  }`}
                >
                  <SectionDescription
                    sectionText={data.answer}
                    width="44.37830687830688vw"
                    color="#58595B"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container7;

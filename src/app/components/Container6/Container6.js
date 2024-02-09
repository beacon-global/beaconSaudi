import React from "react";
import styles from "./container6.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container6 } from "@/app/contents/Data";

const Container6 = () => {
  const cardData = container6.cardData;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container6.sectionName} />
        <SectionTitle
          sectionText={container6.sectionTitle}
          padding="0.6613756613756614vw 0 4.62962962962963vw 0"
        />
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.number}>{data.img}</h3>
            <CardHeading
              sectionText={data.cardHeading}
              padding="0 0 0.992063492063492vw 0 "
            />
            <SectionDescription sectionText={data.description} color="#58595B"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container6;

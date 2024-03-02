import React from "react";
import styles from "./container2.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container2 } from "@/app/contents/MainPage";
import Image from "next/image";

const Container2 = () => {
  const cardData = container2.cardData;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container2.sectionName} />
        <SectionTitle sectionText={container2.sectionTitle} />
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.front}>
              <h3 className={styles.number}>{data.number}</h3>
              <CardHeading sectionText={data.heading} color="#fff" />
              <SectionDescription sectionText={data.description} />
            </div>
            <div className={styles.back}>
              <Image
                src={data.img}
                width={100}
                height={100}
                quality={100}
                priority={true}
                unoptimized
                alt="bgImage"
                className={styles.bigImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container2;

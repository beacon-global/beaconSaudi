"use client"
import React from "react";
import styles from "./container6.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import Image from "next/image";
import { useWindowSize } from "@/app/utils.js/windowSize";

const Container6 = ({ data, servicePage }) => {
  const { windowSize, isSmallScreen } = useWindowSize();
  console.log(isSmallScreen,"btn")

  const servicePageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center ",
    textAlign: "center",
    height: "auto",
  };

  const cardData = data.cardData;
  return (
    <div
      className={styles.container}
      style={{ marginTop: servicePage && "6.613756613756613vw" }}
    >
      <div className={styles.title}>
        {servicePage ? "" : <SectionName sectionText={data.sectionName} />}
        <SectionTitle
          sectionText={data.sectionTitle}
          padding="0.6613756613756614vw 0 4.62962962962963vw 0"
        />
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            style={servicePage ? servicePageStyle : servicePageStyle}
          >
            <div className={styles.number}>
              <Image
                quality={100}
                priority={true}
                unoptimized
                src={data.img}
                width={80}
                height={80}
                layout="responsive"
                alt="aboutus2"
                className={styles.cardIcon}
              />
            </div>
            <CardHeading
              sectionText={data.cardHeading}
              padding="0 0 0.992063492063492vw 0 "
            />
            <SectionDescription
              sectionText={data.description}
              color="#58595B"
            />
          </div>
        ))}
      </div>
      <a href="pages/Services">
        <BtnComponent
          buttonText={data.btnText}
          bg="transparrent"
          borderColor="#02040E"
          arrow={true}
          color="#02040E"
          btnFill={true}
          margin={isSmallScreen ? "8vw auto 0 auto" :"3.3068783068783065vw auto 0 auto"}
        />
      </a>
    </div>
  );
};

export default Container6;

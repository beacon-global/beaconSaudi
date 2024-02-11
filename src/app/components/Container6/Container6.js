import React from "react";
import styles from "./container6.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import Image from "next/image";

const Container6 = ({ data, servicePage }) => {
  const servicePageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center ",
    textAlign: "center",
    height:"auto",
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
            style={servicePage ? servicePageStyle : {}}
          >
            <div className={styles.number}>
              {servicePage ? (
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
              ) : (
                data.img
              )}
            </div>
            <CardHeading
              sectionText={data.cardHeading}
              padding="0 0 0.992063492063492vw 0 "
            />
            <SectionDescription
              sectionText={data.description}
              color="#58595B"
            />
            {servicePage && (
              <div className={styles.cardContainerOverlay}>
                <CardHeading
                  sectionText={data.cardHeading}
                  padding="0 0 0.992063492063492vw 0 "
                />
                <div className={styles.overLayDesc}>
                  <p>{data.details[0]}</p>
                  <p>{data.details[1]}</p>
                  <p>{data.details[2]}</p>
                  <p>{data.details[3]}</p>
                  <p>{data.details[4]}</p>
                  <p>{data.details[5]}</p>
                  <p>{data.details[6]}</p>
                  <p>{data.details[7]}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container6;

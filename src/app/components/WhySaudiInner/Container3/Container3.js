import React from "react";
import styles from "./container3.module.css";
import { CardHeading, SectionDescription, SectionName, SectionTitle } from "../../ButtonComponent";
import { container3 } from "@/app/contents/Data";
import Image from "next/image";
import { useEffect } from "react";

const Container3 = ({ onScrollPast }) => {
  
  // Notify the parent component when Container3 is onScrollPast
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (onScrollPast) {
            onScrollPast(); // Trigger the callback when Container3 comes into view
          }
        }
      },
      { threshold: 0.1 } // Adjust this value based on when you want to trigger the callback
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [onScrollPast]);

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
              style={{ objectFit: "cover", objectPosition: "top"}}
            />
            <div className={styles.cardContent}>
              <CardHeading
                sectionText={data.cardHeading}
                padding="0 0 0.392063492063492vw 0"
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

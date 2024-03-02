"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./whatsappchat.module.css";

const WhatsAppChat = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const offices = [
    {
      img: "/office.png",
      name: "",
      number: "966570807175",
      location: "Jeddah",
    },
    {
      img: "/office.png",
      name: "",
      number: "966539067414",
      location: "Riyadh",
    },
    {
      img: "/office.png",
      name: "",
      number: "966566416774",
      location: "Dammam",
    },
    {
      img: "/office.png",
      name: "",
      number: "966563144588",
      location: "Jazan",
    },
  ];

  const handleChatIconClick = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleOfficeClick = (number) => {
    window.open(`https://wa.me/${number}`, "_blank");
    setIsCardVisible(false);
  };

  return (
    <>
      <div
        className={`${styles.chatIcon} ${isCardVisible ? styles.active : ""}`}
        onClick={handleChatIconClick}
      >
        <div className={styles.imgContainer}>
          <Image
            src="/whatsapp.svg"
            width={70}
            height={70}
            alt="ImageService"
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
      </div>
      <div
        className={styles.whatsappChat}
        style={{
          maxHeight: isCardVisible ? "100vh" : "0",
          transition: "max-height 0.4s ease",
        }}
      >
        <div>
          {isCardVisible && (
            <div className={styles.topCard}>
              <div
                className={styles.closeButton}
                onClick={() => setIsCardVisible(false)}
              >
                &times;
              </div>
              <h3>Hello...</h3>
              <p>
                Chat with us! Simply choose an office contact from the list
                below.
              </p>
            </div>
          )}
          {isCardVisible && (
            <div className={styles.officeCards}>
              {offices.map((office, index) => (
                <div
                  onClick={() => handleOfficeClick(office.number)}
                  className={styles.officeCard}
                  key={index}
                >
                  <Image
                    src={office.img}
                    width={70}
                    height={70}
                    alt="ImageService"
                    quality={100}
                    priority={true}
                    unoptimized
                  />
                  <p>{office.name}</p>
                  <p>{office.location}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WhatsAppChat;

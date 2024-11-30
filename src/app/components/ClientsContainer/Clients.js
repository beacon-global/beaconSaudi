"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Stats from "./Stats";
import LogoSlider from "../LogoSlider/LogoSlider";
import styles from "./clients.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { clientsData } from "@/app/contents/MainPage";

function Clients({ whySaudi }) {
  const testimonialData = clientsData.cardData;

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      isMobileScreen ? prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1 : prevIndex === testimonialData.length - 3 ? 0 : prevIndex + 1
    );
    console.log(currentCardIndex);
  };

  const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      isMobileScreen ? prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1 : prevIndex === 0 ? testimonialData.length - 3 : prevIndex - 1
    );
    console.log(currentCardIndex);
  };

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", checkScreenSize);

    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMobileScreen]);

  const imageSources = [
    "/MainPage/clients/brands/webp/logo1.webp",
    "/MainPage/clients/brands/webp/logo2.webp",
    "/MainPage/clients/brands/webp/logo3.webp",
    "/MainPage/clients/brands/webp/logo4.webp",
    "/MainPage/clients/brands/webp/logo5.webp",
    "/MainPage/clients/brands/webp/logo6.webp",
    "/MainPage/clients/brands/webp/logo9.webp",
    "/MainPage/clients/brands/webp/logo10.webp",
    "/MainPage/clients/brands/webp/logo11.webp",
    "/MainPage/clients/brands/webp/logo12.webp",
    "/MainPage/clients/brands/webp/logo13.webp",
    "/MainPage/clients/brands/webp/logo15.webp",
    "/MainPage/clients/brands/webp/logo17.webp",
    "/MainPage/clients/brands/webp/logo18.webp",
    "/MainPage/clients/brands/webp/logo20.webp",
    "/MainPage/clients/brands/webp/logo22.webp",
    "/MainPage/clients/brands/webp/shami.webp",
    "/MainPage/clients/newBrands/2x/58.png",
    "/MainPage/clients/newBrands/2x/59.png",
    "/MainPage/clients/newBrands/2x/60.png",
    "/MainPage/clients/newBrands/2x/61.png",
    "/MainPage/clients/newBrands/2x/62.png",
    "/MainPage/clients/newBrands/2x/68.png",
    "/MainPage/clients/newBrands/2x/69.png",
    "/MainPage/clients/newBrands/2x/70.png",
    "/MainPage/clients/newBrands/2x/71.png",
  ];

  const imageSources2 = [
    "/MainPage/clients/NewBrands/2x/31.png",
    "/MainPage/clients/NewBrands/2x/32.png",
    "/MainPage/clients/NewBrands/2x/33.png",
    "/MainPage/clients/NewBrands/2x/34.png",
    "/MainPage/clients/NewBrands/2x/35.png",
    "/MainPage/clients/NewBrands/2x/36.png",
    "/MainPage/clients/NewBrands/2x/37.png",
    "/MainPage/clients/NewBrands/2x/38.png",
    "/MainPage/clients/NewBrands/2x/39.png",
    "/MainPage/clients/NewBrands/2x/40.png",
    "/MainPage/clients/NewBrands/2x/41.png",
    "/MainPage/clients/NewBrands/2x/42.png",
    "/MainPage/clients/NewBrands/2x/43.png",
    "/MainPage/clients/NewBrands/2x/44.png",
    "/MainPage/clients/NewBrands/2x/45.png",
    "/MainPage/clients/NewBrands/2x/46.png",
    "/MainPage/clients/NewBrands/2x/47.png",
    "/MainPage/clients/NewBrands/2x/48.png",
    "/MainPage/clients/NewBrands/2x/49.png",
    "/MainPage/clients/NewBrands/2x/50.png",
    "/MainPage/clients/NewBrands/2x/51.png",
    "/MainPage/clients/NewBrands/2x/52.png",
    "/MainPage/clients/NewBrands/2x/53.png",
    "/MainPage/clients/NewBrands/2x/54.png",
    "/MainPage/clients/NewBrands/2x/55.png",

  ];

  const imageSources3 = [
    "/MainPage/clients/NewBrands/2x/56.png",
    "/MainPage/clients/NewBrands/2x/57.png",
    "/MainPage/clients/NewBrands/2x/72.png",
    "/MainPage/clients/NewBrands/2x/73.png",
    "/MainPage/clients/NewBrands/2x/74.png",
    "/MainPage/clients/NewBrands/2x/75.png",
    "/MainPage/clients/NewBrands/2x/76.png",
    "/MainPage/clients/NewBrands/2x/77.png",
    "/MainPage/clients/NewBrands/2x/78.png",
    "/MainPage/clients/NewBrands/2x/79.png",
    "/MainPage/clients/NewBrands/2x/80.png",
    "/MainPage/clients/NewBrands/2x/81.png",
    "/MainPage/clients/NewBrands/2x/82.png",
    "/MainPage/clients/NewBrands/2x/83.png",
    "/MainPage/clients/NewBrands/2x/84.png",
    "/MainPage/clients/NewBrands/2x/85.png",
    "/MainPage/clients/NewBrands/2x/86.png",
    "/MainPage/clients/NewBrands/2x/87.png",
    "/MainPage/clients/NewBrands/2x/88.png",
    "/MainPage/clients/NewBrands/2x/89.png",
    "/MainPage/clients/NewBrands/2x/90.png",
    "/MainPage/clients/NewBrands/2x/91.png",
    "/MainPage/clients/NewBrands/2x/92.png",
    "/MainPage/clients/NewBrands/2x/93.png",
    "/MainPage/clients/NewBrands/2x/94.png",
  ];

  const repeatedImageSources = Array.from({ length: 10 }, () => [
    ...imageSources,
  ]).flat();
  const repeatedImageSources2 = Array.from({ length: 10 }, () => [
    ...imageSources2,
  ]).flat();
  const repeatedImageSources3 = Array.from({ length: 10 }, () => [
    ...imageSources3,
  ]).flat();

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    return () => {
    };
  }, []);

  return (
    <div className={styles.clientsContainer}>
      <div className={styles.title}>
        <SectionName sectionText="our CLIENTS" />
        <SectionTitle sectionText="Our core partners" />
      </div>
      {/* <div className={styles.clientsImgContainer}> */}
      {/* <LogoSlider
        imageSources={repeatedImageSources}
        initialAnimateValue="-160%"
        hoverDuration="180"
        duration="100"
      /> */}

      <div className="scroller" data-direction="left" data-speed="fast">
        <div className="scroller__inner">
          {repeatedImageSources.map((img, index) => (
            <img key={index} src={img} alt="" className="logoClients" />
          ))}
        </div>
      </div>
      {whySaudi &&
        <>
          <div className="scroller mt" data-direction="right" data-speed="fast" >
            <div className="scroller__inner">
              {repeatedImageSources2.map((img, index) => (
                <img key={index} src={img} alt="" className="logoClients" />
              ))}
            </div>
          </div>
          <div className="scroller mt" data-direction="left" data-speed="fast" >
            <div className="scroller__inner">
              {repeatedImageSources3.map((img, index) => (
                <img key={index} src={img} alt="" className="logoClients" />
              ))}
            </div>
          </div>
        </>
      }
      {/* </div> */}
      <div className={styles.testimonialMainContainer}>
        <div className={styles.businessContentContainer}>
          <SectionName sectionText="CLIENT REVIEWS" />
          <SectionTitle sectionText="We always go the extra mile for our clients" />
        </div>

        <div className={styles.testimonialRightContainer}>
          <div className={styles.leftButton} onClick={showPreviousCard}>
            {"<"}
          </div>
          <div className={styles.testimonialProfileContainer}>
            {testimonialData.map((data, index) => (
              <div
                key={index}
                className={styles.testimonialProfile}
                style={{
                  transform: isMobileScreen
                    ? `translateX(${(currentCardIndex * -75.13333333333333) + 74.13333333333333}vw)`
                    : `translateX(-${currentCardIndex * 108}%)`,
                  transition: 'transform 0.5s ease',
                }}
              >
                <div className={styles.testimonialMessage}>
                  <SectionDescription sectionText={data.message} />
                </div>
                <div className={styles.testimonialCardBottom}>
                  <div className={styles.testiImg}>
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
                  <div>
                    <p className={styles.profileName}>{data.name}</p>
                    <p className={styles.profileDesignation}>
                      {data.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.rightButton} onClick={showNextCard}>
            {">"}
          </div>

          <div className={styles.arrowButtonsTest}>
            <div
              className={[styles.leftButton, styles.mLeftButton].join(" ")}
              onClick={showPreviousCard}
            >
              {"<"}
            </div>
            <div className={styles.rightButton} onClick={showNextCard}>
              {">"}
            </div>
          </div>
        </div>

        <hr />
        <Stats useBackgroundImage={false} isMainPage={false} />
      </div>
    </div>
  );
}

export default Clients;

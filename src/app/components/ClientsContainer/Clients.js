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

function Clients() {
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
  ];

  const repeatedImageSources = Array.from({ length: 10 }, () => [
    ...imageSources,
  ]).flat();

  useEffect(() => {
    // Retrieve scrollers on component mount
    const scrollers = document.querySelectorAll('.scroller');

    // Function to add animation
    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    // If a user hasn't opted in for reduced motion, then add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }
    
    // Clean up function
    return () => {
      // Cleanup code if needed
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
      
<div class="scroller" data-direction="left" data-speed="fast">
  <div class="scroller__inner">
    {imageSources.map((img, index) => (
      <img key={index} src={img} alt="" className="logoClients" />
    ))}
  </div>
</div>
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
                    ? `translateX(${(currentCardIndex * -104) + 105}%)`
                    : `translateX(-${currentCardIndex * 108}%)`,
                  transition: 'transform 0.5s ease',
                }}
              >
                <div className={styles.testimonialMessage}>
                  <SectionDescription sectionText={data.message} />
                </div>
                <div className={styles.testimonialCardBottom}>
                  {/* <div className={styles.testiImg}>
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
                  </div> */}
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

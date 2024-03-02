"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./stats.module.css"

function Stats({ useBackgroundImage, isMainPage }) {
  const largeBackgroundImageUrl = "/NewSvgs/Backgrounds/bg4.png";
  const smallBackgroundImageUrl = "/NewSvgs/Backgrounds/bg4.png";
  const mainPagePadding = "192px 135px";
  const aboutPagePadding = "50px 135px";
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");
  const [ppadding, setPadding] = useState("");

  const statsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = document.body.clientWidth;

      // Set the background image URL based on the width
      const newBackgroundImageUrl =
        width >= 600 ? largeBackgroundImageUrl : smallBackgroundImageUrl;
      const newPadding =
        isMainPage && width >= 600
          ? mainPagePadding
          : isMainPage && width < 600
          ? "54px 45px"
          : !isMainPage && width >= 600
          ? aboutPagePadding
          : !isMainPage && width < 600
          ? "8vw 8.666666666666668vw"
          : "8vw 8.666666666666668vw";

      // Update the background image URL only if it has changed
      if (newBackgroundImageUrl !== backgroundImageUrl) {
        setBackgroundImageUrl(newBackgroundImageUrl);
        setPadding(newPadding);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial background image based on the initial width
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [backgroundImageUrl, isMainPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting up when the component is in view
            const options = {
              duration: 1000, // Animation duration in milliseconds
              step: 1, // Increment step
            };

            const finalCounts = {
              count1: 1000, // Your final values here
              count2: 500,
              count3: 3,
              count4: 5,
            };

            animateValue("count1", finalCounts.count1, options, setCount1);
            animateValue("count2", finalCounts.count2, options, setCount2);
            animateValue("count3", finalCounts.count3, options, setCount3);
            animateValue("count4", finalCounts.count4, options, setCount4);

            observer.unobserve(statsRef.current);
          }
        });
      },
      {
        threshold: 0.1, // When 10% of the component is visible, trigger the animation
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      // Cleanup the observer
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Function to animate the value from start to end
  const animateValue = (id, end, { duration, step }, setValue) => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < end) {
        if (id === "count1" || id === "count2") {
          start += 10; // Increase by 10 for count1 and count2
        } else {
          start += step; // Increase by 1 for others
        }
        setValue(start);
      } else {
        setValue(end);
        clearInterval(interval);
      }
    }, duration / (end / step));
  };

  return (
    <div
      className={styles.greenBannerContiner}
      ref={statsRef}
      style={{
        // backgroundImage: "#11215B"
        //   ? `url(${backgroundImageUrl})`
        //   : "none",
        backgroundColor: useBackgroundImage ? "#11215B" : "transparent",
        height: useBackgroundImage ? "auto" : "194px",
        padding: ppadding,
      }}
    >
      <div className={styles.statsContiner}>
        <div className={styles.statContainer}>
          <h1>{count1}+</h1>
          <p>Projects Completed</p>
        </div>
        <div className={styles.statContainer}>
          <h1>{count2}+</h1>
          <p>Happy Clients</p>
        </div>
        <div className={styles.statContainer}>
          <h1>{count3}+</h1>
          <p>Years of Experience</p>
        </div>
        <div className={styles.statContainer}>
          <h1>{count4}+</h1>
          <p>Locations</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

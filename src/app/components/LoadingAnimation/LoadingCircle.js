"use client";
import groovyWalkAnimation from "../../../../public/loadingCircle.json";
import styles from "./loadingcircle.module.css";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LoadingCircle = ({ onLoadedImages }) => {
  const DesktopAnimationStyle = {
    width: "3.3068783068783065vw", 
    height: "3.3068783068783065vw",
  };

  const MobileAnimationStyle = {
    width: "6.666666666666667vw", 
    height: "6.666666666666667vw",
  };

  return (
    <>
      <div className={styles.DesktopLottieContainer}>
        <Lottie
          onLoadedImages={onLoadedImages}
          animationData={groovyWalkAnimation}
          loop={true}
          style={DesktopAnimationStyle}
        />
      </div>
      <div className={styles.MobileLottieContainer}>
        <Lottie
          onLoadedImages={onLoadedImages}
          animationData={groovyWalkAnimation}
          loop={true}
          style={MobileAnimationStyle}
        />
      </div>
    </>
  );
};

export default LoadingCircle;

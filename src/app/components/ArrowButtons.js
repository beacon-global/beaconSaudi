import React from "react";
import styles from "../styles/arrowbutton.module.css";
import { container2 } from "../contents/Data";
import Image from "next/image";

const ArrowButtons = ({ nextImage, prevImage, margin ,width }) => {
  return (
    <div
      className={styles.carouselButtonContainer}
      style={{ margin: margin , width: width }}
    >
      <div
        onClick={prevImage}
        className={`${styles.carouselButtonContainerLeft} ${styles.carouselHover}`}
      >
        <Image
          width={377}
          height={420}
          src="/leftGreaterThanArrowPurple.svg"
          alt="arrow"
          className={styles.arrow}
        />
      </div>
      <div
        onClick={nextImage}
        className={`${styles.carouselButtonContainerRight} ${styles.carouselHover}`}
      >
        <Image
          width={377}
          height={420}
          src="/RightGreaterThanArrowPurple.svg"
          alt="arrow"
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default ArrowButtons;

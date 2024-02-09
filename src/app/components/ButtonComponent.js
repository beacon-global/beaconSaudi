import Image from "next/image";
import React from "react";

const BtnComponent = ({
  borderColor,
  bg,
  color,
  width,
  buttonText,
  margin,
  arrow,
  h5Margin,
  arrowColor,
  height,
  header,
}) => {
  return (
    <div
      className={`btnContainer${arrow ? "" : ""}`}
      style={{
        border: "0.10416666666666667vw solid " + borderColor,
        background: bg,
        color: color,
        width: width ? width : "13.425925925925927vw",
        height: height ? height : "3.6375661375661372vw",
        margin: margin,
      }}
    >
      <div className="visibleWrapperContainer">
        <div className="topVisibleContainer buttonText">
          <h5
            className="buttonText"
            style={{
              margin: h5Margin ? h5Margin : "0 0.6510416666666667vw 0 0",
            }}
          >
            {buttonText}
          </h5>
          {arrow ? (
            <Image
              className={`${header ? "callIcon" : ""} rightArrow`}
              src={
                header
                  ? "/Header/icon.svg"
                  : borderColor
                  ? "/blackArrow.svg"
                  : "/whiteArrow.svg"
              }
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
              //   style={{
              //     filter: arrowColor ? "brightness(1000%)" : "",
              //   }}
            />
          ) : (
            ""
          )}
        </div>
        <div className="bottomVisibleContainer buttonText">
          <h5
            className="buttonText"
            style={{
              margin: h5Margin ? h5Margin : "0 0.6510416666666667vw 0 0",
            }}
          >
            {buttonText}
          </h5>
          {arrow ? (
            <Image
              className={`${header ? "callIcon" : ""} rightArrow`}
              src={
                header
                  ? "/Header/icon.svg"
                  : borderColor
                  ? "/blackArrow.svg"
                  : "/whiteArrow.svg"
              }
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

const SectionName = ({ sectionText, weight, textAllign }) => {
  const hyphen = String.fromCharCode(8212);
  return (
    <h4
      style={{
        color: "#FFFFFF",
        display: "inline-block",
        padding: "0.3306878306878307vw 1.984126984126984vw",
        textAlign: textAllign,
        background: "#11215B",
        borderRadius: "4.62962962962963vw",
      }}
    >
      {sectionText}
    </h4>
  );
};

const SectionTitle = ({
  sectionText,
  color,
  secondaryWordColor,
  weight,
  padding,
  width,
  textAllign,
  wordIndex,
  margin,
}) => {
  const words = (sectionText || "").split(" ");

  return (
    <h2
      style={{
        color: color,
        fontWeight: weight,
        padding: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            color: Array.isArray(wordIndex)
              ? wordIndex.includes(index)
                ? secondaryWordColor
                : "inherit"
              : index === wordIndex
              ? secondaryWordColor
              : "inherit",
          }}
        >
          {word}{" "}
        </span>
      ))}
    </h2>
  );
};

const CardHeading = ({
  sectionText,
  color,
  weight,
  padding,
  width,
  textAllign,
  margin,
}) => {
  return (
    <h3
      style={{
        color: color,
        fontWeight: weight,
        padding: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {sectionText}
    </h3>
  );
};

const SectionDescription = ({
  sectionText,
  color,
  weight,
  padding,
  width,
  textAllign,
  margin,
}) => {
  return (
    <p
      style={{
        color: color,
        fontWeight: weight,
        paddingBottom: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {sectionText}
    </p>
  );
};

export {
  BtnComponent,
  SectionTitle,
  SectionName,
  SectionDescription,
  CardHeading,
};

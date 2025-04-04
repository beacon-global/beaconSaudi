"use client";
import styles from "../../styles/aboutus.module.css";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/app/components/WhySaudiInner/Header/Header";
import MobileHeader from "@/app/components/WhySaudiInner/MobileHeader/MobileHeader";
import ContactBanner from "@/app/components/WhySaudiInner/ContactBanner/ContactBanner";
import Footer from "@/app/components/WhySaudiInner/Footer/Footer";
import Stats from "@/app/components/ClientsContainer/Stats";
import WhatsAppChat from "@/app/components/WhatsAppChat/WhatsAppChat";

// const Header = dynamic(() => import("@/app/components/Header"));
// const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
// const Stats = dynamic(() => import('@/app/components/Stats'));
// const Contact = dynamic(() => import('@/app/components/Contact'));
// const Footer = dynamic(() => import('@/app/components/Footer'));

function About() {
  const cvData = [
    {
      img: "/NewSvgs/SVG7/Group1.svg",
      heading: "Business Agility",
      description:
        "Our team of proactive consultants, PRO experts, business operations staff, and professionals offer business incorporation strategies tailor-made to streamline your business aspects.",
    },
    {
      img: "/NewSvgs/SVG7/Group2.svg",
      heading: "Expertise & Proficiency",
      description:
        "Through professional experience and goodwill, we gather your business setup expectations and work based on the needs to address the concerns helping you thrive in the KSA Market.",
    },
    {
      img: "/NewSvgs/SVG7/Group3.svg",
      heading: "Client Fulfilment",
      description:
        "With bespoke solutions that align with your goals, you get served based on your needs and according to the industry through the solutions to assist you and boost your satisfaction.",
    },
    {
      img: "/NewSvgs/SVG7/Group4.svg",
      heading: "Top-notch Consulting",
      description:
        "We comprehend the business jurisdictions, rules and regulations, thereby providing the risk mitigation services along with the consulting solutions to the entrepreneurs.",
    },
    {
      img: "/NewSvgs/SVG7/Group5.svg",
      heading: "Affordable Evaluation",
      description:
        "The cost of company setup in KSA would be huge if not directed appropriately. We evaluate the documentation, and the aspects of business and operations to adopt a cost-efficient business setup.",
    },
    {
      img: "/NewSvgs/SVG7/Group6.svg",
      heading: "Easy to Register",
      description:
        "As the top business setup consultants in KSA, we help you make the process of company formation effortless. With in-depth expertise, we simplify the company setup making it easy to register.",
    },
  ];

  const vissionMissionData = [
    {
      img: "/NewSvgs/SVG7/v1.svg",
      heading: "Our Mission",
      className: "c1",
      description:
        "To strengthen the efforts of entrepreneurs and business founders with the ideal business consultation and incorporation strategies helping them fix their roots in the ever-evolving business ecosystem. We help clients attain remarkable business achievements while emphasising assistance in all segments of business operations.",
    },
    {
      img: "/NewSvgs/SVG7/v2.svg",
      heading: "Our Values",
      className: "c2",
      description:
        "We grow with the values encompassing productivity, innovation, transparency and dedication to stay confident while developing relationships. Our panel keeps delivering business solutions woven to suit your expectations while transforming your business incorporation dream into a success with support at every phase of your journey for an amazing position in the market.",
    },
    {
      img: "/NewSvgs/SVG7/v3.svg",
      heading: "Our Vision",
      className: "c3",
      description:
        "To build and expand the business realm through exceptional planning, and scaling the efforts to push business towards excellence with the best of technologies. We strive to lay the benchmark of business consulting solutions and strategies while working towards achieving the goal of being a global marketing leader with the encapsulation of all business requirements.",
    },
  ];
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const useBackgroundImage = true;

  return (
    <>
      <WhatsAppChat />
      <Header phoneNumber="+971 527 733 789" />
      <MobileHeader />
      <div className={styles.aboutUsMainContainer}>
        <h2 className={`${styles.aboutPageHeading} businessDesc`}>
          Business Support with Vision of Ultimate Growth
        </h2>
        {/* <h2
          style={{ textAlign: "center" }}
          className={`${styles.mBusinessDesc1} mBusinessDesc`}
        >
          Business Support with Vision <br /> of Ultimate Growth
        </h2> */}
        <div className={styles.aboutUsHeroContainer}>
          <div className={styles.firstImage}>
            <Image
              quality={100}
              priority={true}
              unoptimized
              src="/AboutPage/Photo.webp"
              width={1212}
              height={600}
              layout="responsive"
              alt="aboutus1"
              style={{ display: loaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          </div>
          <p>
            Partnering with your vision, we at beacon transform business aspirations into
            thriving realities across the Middle East. With established offices in Jeddah,
            Riyadh, Dammam, and Jazan, as well as a notable presence in GCC, we pride ourselves on
            delivering unparalleled client support. As part of the Beacon Global network, we are dedicated to
            expanding your business&apos;s horizons through comprehensive business incorporation and consulting services.
            Our offerings encompass exceptional company formation, alongside legal, financial, and technological assistance,
            ensuring seamless establishment and ongoing operations. Leveraging advanced project management capabilities and
            meticulous business operation planning, we guarantee optimal efficiency for your ventures in Saudi Arabia.
            Moreover, we offer accounting, tax, audit, digital marketing, and various other related services to empower
            your business&apos;s growth and evolution. Your long-term success is our priority.
          </p>
        </div>

        <div className={styles.statContainer}>
          <Stats useBackgroundImage={useBackgroundImage} isMainPage={false} />
        </div>

        <div className={styles.aboutUsContainer2}>
          <h2 className="businessDesc">
            Effortless KSA Company Formation with Beacon&apos;s Expertise
          </h2>
          <h2
            style={{ textAlign: "center" }}
            className={`${styles.mBusinessDesc1} mBusinessDesc`}
          >
            Effortless KSA Company Formation<br /> with Beacon&apos;s Expertise

          </h2>
          <div className={styles.mobilePaddingCard}>
            <div className={styles.cardMainContainer}>
              <div className={styles.cardContainer}>
                <div className={styles.ImageCon}>
                  <div>
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup1.svg"
                      width={80}
                      height={80}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.cardIcon}
                    />
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup1.svg"
                      width={60}
                      height={60}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.mCardIcon}
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup2.svg"
                      width={80}
                      height={80}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.cardIcon}
                    />
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup2.svg"
                      width={60}
                      height={60}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.mCardIcon}
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup3.svg"
                      width={80}
                      height={80}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.cardIcon}
                    />
                    <Image
                      quality={100}
                      priority={true}
                      unoptimized
                      src="/NewSvgs/SVG4/Ggroup3.svg"
                      width={60}
                      height={60}
                      layout="responsive"
                      alt="aboutus2"
                      className={styles.mCardIcon}
                    />
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardsingle}>
                    <h1>Destination Choice</h1>
                    <p>
                      Enjoy the business incorporation options in the iconic
                      locations of KSA with advantages on time to set up, profit
                      repatriation, and ownership.
                    </p>
                  </div>
                  <div className={styles.cardsingle}>
                    <h1>Tax Benefits</h1>
                    <p>
                      Get tax advantages to let your investment get promoted
                      with liberal regulations that let you ease the business
                      establishment in KSA.
                    </p>
                  </div>
                  <div className={styles.cardsingle}>
                    <h1>Digital Transformation</h1>
                    <p>
                      Heading towards the technology-led future, we offer high
                      digital transformation solutions with the best
                      technological infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutUscontainer3}>
          <div className={styles.vissionMissionContainer}>
            {vissionMissionData.map((data, index) => (
              <div className={styles.vissionMissionCell} key={index}>
                {/* <div className={styles.topContainer}> */}
                <div
                  className={`${styles.container3Content} ${data.className}`}
                >
                  <h1>{data.heading}</h1>
                  <p>{data.description}</p>
                </div>
                <div className={styles.container3Img}>
                  <Image
                    quality={100}
                    priority={true}
                    unoptimized
                    src={data.img}
                    width={60}
                    height={60}
                    layout="responsive"
                    alt={`vissionMission ${index}`}
                  />
                  {/* </div> */}
                </div>
                <div className={styles.bottomContainer}></div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.aboutUscontainer4}>
          {" "}
          <h2 className={`${styles.aboutPageHeading} businessDesc`}>
            Why Choose Us?
          </h2>
          <div className={styles.cvCard}>
            {cvData.map((data, index) => (
              <div className={styles.cvBackground} key={index}>
                <div className={styles.cvContent}>
                  <div className={styles.cvImg}>
                    <Image
                      src={data.img}
                      width={80}
                      height={80}
                      alt={`cv ${index}`}
                      layout="responsive"
                    />
                  </div>
                  <div className={styles.cvText}>
                    <h1>{data.heading}</h1>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className={styles.contactCont}> */}
        <ContactBanner />
        {/* </div> */}
        {/* <div className={styles.footerContainer}> */}
        <Footer contactNumber="+971 527 733 789" email="mail@beaconarabia.com"
          address="Office #39, 7th Floor,Dubai National Insurance Building, Port Saeed Deira, Dubai, UAE" />
        {/* </div> */}
      </div>
    </>
  );
}

export default About;

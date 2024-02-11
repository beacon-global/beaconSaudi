"use client";
import React, { useState } from "react";
import styles from "../../Styles/servicesPage.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";


const Header = dynamic(() => import("@/app/components/Header"));
const MobileHeader = dynamic(() => import("@/app/components/MobileHeader"));
const Procedures = dynamic(() => import("@/app/components/Procedures"));
const Faq = dynamic(() => import("@/app/components/Faq"));
const Footer = dynamic(() => import("@/app/components/Footer"));

function Services() {
  const servicePageData = [
    {
      img: "/NewSvgs/SVG2/hh/Group1.svg",
      heading: "Business Incorporation",
      description:
        "We offer business incorporation and compliance support to drive your business right. Let us know your business needs and scale your business setup process while saving on costs.",
      details: [
        "GCC National Company",
        "Limited Liability Company",
        "Multi Country Business Setup",
        "Branch of Foreign Company",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group6.svg",
      heading: "Business Consultation",
      description:
        "Our team provides business consultation services to serve your business needs and guide you through the crucial aspects of business like technology, people, processes, and operations.",
      details: [
        "Government Relation Management",
        "Employee Work Permit & Visa Assistance",
        "ISO Certifications",
        "Licence Amendment",
        "Company Liquidation",
        "Business Transfer - Merging",
        "Trademark Registration",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group2.svg",
      heading: "Financial & Accounting",
      description:
        "With regular management of accounts, financial reports, and the related processes of the firm, we engage in analyzing and reporting the financial resources of your company.",
      details: [
        "Financial Statement Preparation",
        "Tax Planning & Preparation",
        "Budgeting & Forecasting",
        "Financial Planning",
        "Investment Management",
        "Business Valuation",
        "Corporate Finance & Payroll Services",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group4.svg",
      heading: "Audit & Taxation",
      description:
        "Through regular monitoring and review of the core tax matters that affect the business, we generate audit and tax reports relevant to your business that keep the quality alive.",
      details: [
        "Internal Audits",
        "Compliance Audits",
        "VAT Advisory Services",
        "Income Tax Advisory Services",
        "Social Responsibility Audits",
        "Tax Risk Management Services",
        "Operational and System Audits",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group3.svg",
      heading: "Technology Solutions",
      description:
        "Our technical experts let you experience the best of business with the power of technology and address your quest for innovation by reimagining the scope of business models.",
      details: [
        "Digital Strategy",
        "Designing",
        "Web Development",
        "Ecommerce Development",
        "App Development",
      ],
    },
    {
      img: "/NewSvgs/SVG2/hh/Group5.svg",
      heading: "Digital Marketing",
      description:
        "Let us take care of all your digital marketing requirements and take your business processes along the growth path with the strategies and services to trigger brand outreach.",
      details: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (Google Ads)",
        "Social Media Marketing (Meta Ads)",
        "Social Media Management",
      ],
    },
  ];


  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.servicePageMainContainer}>
        <h2 className="businessDesc">
          Your Business Establishment
          <br /> Done Right
        </h2>
        <h2 className={`${styles.mBusinessDesc1} mBusinessDesc`}>
          Your Business Establishment
          <br /> Done Right
        </h2>
        <div
          className={`${styles.servicePageMCardMainContainer} cardMainContainer`}
        >
          {servicePageData.map((data, index) => (
            <div
              className={`${styles.cardContainer} cardContainer`}
              key={index}
            >
              <div className={`${styles.imgContainer} imgContainer`}>
                <Image
                  src={data.img}
                  width={70}
                  height={70}
                  alt="ImageService"
                />
              </div>
              <div className="servicesHeadingContainer">
                <h1 className="servicesHeading">{data.heading}</h1>
              </div>
              <div
                className={`${styles.servicesDescContainer} servicesDescContainer`}
              >
                <p className="servicesDesc">{data.description}</p>
              </div>
              <div
                className={`${styles.sPagecardContainerOverlay} cardContainerOverlay`}
              >
                <h2>{data.heading}</h2>
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
            </div>
          ))}
        </div>

        <div className={styles.servicesPageContainer2}>
          <div className={styles.container2Contents}>
            <h1 className="businessDesc">
              Skyrocketing Your Business
              <br /> Development in KSA
            </h1>
            <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
              Skyrocketing Your Business Development in KSA
            </h1>
            <p>
              Business development in the KSA involves various steps that
              include sponsorship, visa assistance, trade license, financial
              support and many other essential aspects necessary for fund and
              business management. Through in-depth support and collaboration,
              we guide your business and manage every step of it without making
              it a mundane task.
            </p>
          </div>
          <div className={styles.servicePageImageContainer2}>
            {!loaded && (
              <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
              </div>
            )}
            <Image
              src="/ServicesPage/Group.png"
              width={576}
              height={540}
              layout="responsive"
              alt="serviceImg13"
              quality={100}
              priority={true}
              unoptimized
              style={{ display: loaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          </div>
        </div>

        <Procedures />

        <div className={styles.container4}>
          <div className={styles.background}></div>
          <div className={styles.container4ImgContainer}>
            {!loaded && (
              <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
              </div>
            )}
            <Image
              src="/ServicesPage/ServicesPage8.webp"
              width={500}
              height={500}
              layout="responsive"
              alt="aboutus2"
              quality={100}
              priority={true}
              unoptimized
              style={{ display: loaded ? "block" : "none" }}
              onLoad={handleImageLoad}
            />
          </div>
          <div className={styles.container4Contents}>
            <h1 className="businessDesc">
              Strategising Business
              <br /> to Fit Your Goals
            </h1>
            <h1 className={`${styles.servicePagecontainer2MobileHeading}`}>
              Strategising Business to Fit
              <br /> Your Goals
            </h1>
            <p className="servicesDesc">
              Beacon has amazing experience in serving businesses over the
              years, making it compliant and efficient with the top business
              strategies for all business owners in the KSA. As a leading
              business management consultant and the best business set-up
              provider in KSA, we offer a wide range of business, incorporation,
              banking, technology, digital marketing, immigration, accounting,
              tax, and auditing services. Let&lsquo;s talk today and get a tailor-made
              proposal that speaks the essence of your business to leap forward
              and fulfil your business goals!
            </p>
          </div>
        </div>
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default Services;

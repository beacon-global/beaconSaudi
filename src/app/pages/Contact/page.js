"use client";
import React, { useState } from "react";
import styles from "../../styles/contact.module.css";

import Image from "next/image";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../../../../emailjs.config";
import Header from "@/app/components/Header/Header";
import MobileHeader from "@/app/components/MobileHeader/MobileHeader";
import Footer from "@/app/components/Footer/Footer";
import {
  BtnComponent,
  CardHeading,
  SectionTitle,
} from "@/app/components/ButtonComponent";

function Contact() {
  const [showUAECard, setShowUAECard] = useState(false);

  const toggleUAECard = (buttonName) => {
    if (
      (buttonName === "uae" && !showUAECard) ||
      (buttonName === "ksa" && showUAECard)
    ) {
      // Only toggle the card if the clicked button's state is different
      setShowUAECard(!showUAECard);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        e.target,
        emailjsConfig.userId
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });
  };

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.contactUsContainer}>
        <div className={styles.background}></div>

        <div className={styles.title}>
          <SectionTitle
            sectionText="Get in touch with us!"
            padding="0.6613756613756614vw 0 4.62962962962963vw 0"
          />
        </div>

        <div className={styles.container2}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John David"
              />
            </div>
            <div>
              <label htmlFor="email">Your email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@yourmail.com"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="your number here"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help"
              />
            </div>
            <div className={styles.textBox}>
              <label htmlFor="message">How May We Assist You?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className={styles.formSubmit}>
              <button type="submit">Send Message</button>
            </div>

            {/* <BtnComponent bg="#11215b" color="#fff" buttonText="Send Message" /> */}
          </form>
        </div>

        <div className={styles.container3}>
          <div className={styles.title}>
            <SectionTitle
              sectionText="Get in touch with us!"
              padding="0.6613756613756614vw 0 4.62962962962963vw 0"
            />
          </div>
          <div className={styles.contactMainCard}>
            <div className={styles.contactCard}>
              <a href="https://maps.app.goo.gl/UzvX5K7o9c3Cepmx9">
                <div className={styles.contactImgContainer}>
                  <Image
                    src="/ContactPage/1.svg"
                    className={styles.mapImg}
                    width={72}
                    height={72}
                    alt="contactLocactionIcon"
                  />
                  <Image
                    src="/ContactPage/pin.svg"
                    width={72}
                    height={72}
                    alt="contactLocactionIcon"
                    className={styles.pinIcon}
                  />
                </div>
                <div className={styles.contactCardContents}>
                  <CardHeading
                    sectionText="JEDDAH"
                    color="#fff"
                    padding="0 0 0.992063492063492vw 0"
                  />
                  <p className={styles.cardDesc}>
                    Building no. 4626, 501, 5th Floor, Hamza Shehatah St.
                    Al-Baghdadiyah Al-Gharbiyah Jeddah 22235
                  </p>
                </div>
              </a>
              <div className={styles.numberContainer}>
                <a href="tel:966 570 807 175">
                  + 966 570 807 175
                  <br /> + 966 539 067 414
                  <br /> + 966 531 170 957
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <a href="https://maps.app.goo.gl/Vk3noguNHKx7GrMD8">
                <div className={styles.contactImgContainer}>
                  <Image
                    src="/ContactPage/1.svg"
                    className={styles.mapImg}
                    width={72}
                    height={72}
                    alt="contactLocactionIcon"
                  />
                  <Image
                    src="/ContactPage/pin.svg"
                    width={72}
                    height={72}
                    alt="contactLocactionIcon"
                    className={styles.pinIcon}
                  />
                </div>
                <div className={styles.contactCardContents}>
                  <CardHeading
                    sectionText="DAMMAM"
                    color="#fff"
                    padding="0 0 0.992063492063492vw 0"
                  />
                  <p className={styles.cardDesc}>
                    Building no. 7447, B31, 3rd Floor, Al-Thasih St. Al-Amamrah,
                    8th street Dammam 32415
                  </p>
                </div>
              </a>
              <div className={styles.numberContainer}>
                <a href="tel:966 566 416 774">
                  + 966 566 416 774
                  <br /> + 966 539 067 414
                  <br /> + 966 531 170 957
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <a href="https://maps.app.goo.gl/vWfGvAjAcHxV9AUT9">
                <div className={styles.contactImgContainer}>
                  <Image
                    src="/ContactPage/1.svg"
                    className={styles.mapImg}
                    width={72}
                    height={72}
                    alt="contactLocactionIcon"
                  />
                  <Image
                    src="/ContactPage/pin.svg"
                    width={72}
                    height={72}
                    alt="contactLocactionIcon"
                    className={styles.pinIcon}
                  />
                </div>
                <div className={styles.contactCardContents}>
                  <CardHeading
                    sectionText="RIYADH"
                    color="#fff"
                    padding="0 0 0.992063492063492vw 0"
                  />
                  <p className={styles.cardDesc}>
                    Le Cygne Commercial Center 2, 6th FloorAl-Arz,
                    Al-Olaya,Riyadh  12611
                  </p>
                </div>
              </a>
              <div className={styles.numberContainer}>
                <a href="tel:966 540 599 655">
                  + 966 540 599 655
                  <br /> + 966 539 067 414
                  <br /> + 966 531 170 957
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <a href="https://maps.app.goo.gl/vWfGvAjAcHxV9AUT9">
                <div className={styles.contactImgContainer}>
                  <Image
                    src="/ContactPage/1.svg"
                    className={styles.mapImg}
                    width={72}
                    height={72}
                    alt="contactLocactionIcon"
                  />
                  <Image
                    src="/ContactPage/pin.svg"
                    width={72}
                    height={72}
                    alt="contactLocactionIcon"
                    className={styles.pinIcon}
                  />
                </div>
                <div className={styles.contactCardContents}>
                  <CardHeading
                    sectionText="JAZAN"
                    color="#fff"
                    padding="0 0 0.992063492063492vw 0"
                  />
                  <p className={styles.cardDesc}>
                    Room No: 05, 4th Floor Makhtha 6, Prince Muhammed bin
                    Abdulaziz St. Ash Shati District. Jazan 82812
                  </p>
                </div>
              </a>
              <div className={styles.numberContainer}>
                <a href="tel:966 540 599 655">
                  + 966 563144588
                  <br /> + 966 539 067 414
                  <br /> + 966 531 170 957
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;

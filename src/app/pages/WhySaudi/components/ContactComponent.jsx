"use client";
import React, { useState } from "react";
import styles from "../../../styles/contact.module.css";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../../../../../emailjs.config";

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

    const transformData = {
      ...formData,
      website: "https://www.ksa.beaconarabia.com/",
    };

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        transformData,
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
                placeholder="Your number here"
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
      </div>
    </>
  );
}

export default Contact;

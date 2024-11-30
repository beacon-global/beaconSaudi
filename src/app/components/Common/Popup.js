"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
// import pdf from "../../../public/ebook/ebook.pdf";

// import image1 from "../../../public/Form.png";
// import image2 from "../../../public/Form.png";
// import image3 from "../../../public/Form.png";

function Popup({ setShowPopup, heading, page }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        setIsLoading(true);

        const transfromData = { ...formData, clickedpopupname: heading ? heading : "Book a call with us", website: "KSA" }



        emailjs
            .send(
                "service_7uemjx7",
                "template_q4oug1a",
                transfromData,
                "csDBhWE6hOKzpnV3K"
            )
            .then(
                ({ status }) => {
                    console.log("SUCCESS!");
                    if (page === "ebook") {
                        downloadEbook();
                        setSuccess(true);
                        setError("");
                        setShowPopup(false);
                    } else {
                        setSuccess(true);
                        setError("");
                        setShowPopup(false);
                    }
                    setIsLoading(false);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setError(error.text);
                    setIsLoading(false);
                }
            );
    };

    const downloadEbook = () => {
        if (page === "ebook") {
            const link = document.createElement("a");
            link.href = "/ebook/ebook.pdf";
            link.download = "ebook.pdf";
            link.click();
        }
    };

    return (
        <>
            <div className="backgrounddim"></div>
            <div className="popup">
                <div className="closeButton" onClick={() => setShowPopup(false)}
                    style={{ cursor: "pointer", position: "absolute", zIndex: "999" }}>
                    <img src="/close-b.svg" alt="close button" className="closeImage" />
                </div>
                <div className="imageForm">
                    <img
                        src={
                            page === "Partners"
                                ? "/form2.png"
                                : page === "ebook"
                                    ? "/form3.png"
                                    : "/Form.webp"
                        }
                        alt="popup image"
                        className="popupImage"
                    />
                </div>
                <div className="popupForm" style={{ position: "relative" }}>
                    <p className="popupheading">
                        {heading ? heading : "Book a call with us"}
                    </p>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        className="inputBoxF"
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="inputBoxF"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="inputBoxF"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="companyname"
                        placeholder="Company Name"
                        className="inputBoxF"
                        onChange={handleChange}
                    />
                    {/* <div className="select-wrapper">
            <select
              name="country"
              className="inputBoxF"
              onChange={handleChange}
            >
              <option value="" disabled selected hidden>
                Business Location
              </option>
              <option value="KSA">KSA</option>
              <option value="UAE">UAE</option>
              <option value="QATAR">QATAR</option>
              <option value="BAHRAIN">BAHRAIN</option>
              <option value="KUWAIT">KUWAIT</option>
              <option value="OMAN">OMAN</option>
            </select>
          </div> */}
                    <div className="subButton" onClick={handleSubmit}>
                        {isLoading
                            ? "Downloading..."
                            : page === "ebook"
                                ? "Download Ebook"
                                : "Book Now"}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popup;

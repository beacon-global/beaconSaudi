"use client";
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports with lazy-loading
const Banner = dynamic(() => import("@/app/components/Banner"), { ssr: false });
const Clients = dynamic(() => import("@/app/components/ClientsContainer/Clients"), { ssr: false });
const Popup = dynamic(() => import("@/app/components/Common/Popup"), { ssr: false });
const WhatsAppChat = dynamic(() => import("@/app/components/WhatsAppChat/WhatsAppChat"), { ssr: false });
// const ContactBanner = dynamic(() => import("@/app/components/WhySaudiInner/ContactBanner/ContactBanner"), { ssr: false });
const Container2 = dynamic(() => import("@/app/components/WhySaudiInner/Container2/Container2"), { ssr: false });
const Container3 = dynamic(() => import("@/app/components/WhySaudiInner/Container3/Container3"), { ssr: false });
const Container4 = dynamic(() => import("@/app/components/WhySaudiInner/Container4/Container4"), { ssr: false });
const Container5 = dynamic(() => import("@/app/components/WhySaudiInner/Container5/Container5"), { ssr: false });
const Container7 = dynamic(() => import("@/app/components/WhySaudiInner/Container7/Container7"), { ssr: false });
const Footer = dynamic(() => import("@/app/components/WhySaudiInner/Footer/Footer"), { ssr: false });
const Header = dynamic(() => import("@/app/components/WhySaudiInner/Header/Header"), { ssr: false });
const MobileHeader = dynamic(() => import("@/app/components/WhySaudiInner/MobileHeader/MobileHeader"), { ssr: false });
import { useEffect } from "react";

// Eagerly load Hero
import Hero from "@/app/components/WhySaudiInner/Hero/Hero";
const Contact = dynamic(() => import('./components/ContactComponent'), { ssr: false });

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true); // Show the popup after 15 seconds
  //   }, 7000); // 30 seconds in milliseconds

  //   return () => clearTimeout(timer); // Cleanup the timer on unmount
  // }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Popup */}
      {showPopup && <Popup setShowPopup={setShowPopup} />}

      {/* WhatsApp Chat */}
      <WhatsAppChat beaconSaudi="true" />

      {/* Headers */}
      <Header phoneNumber="+971 527 733 789" />
      <MobileHeader />

      {/* Main content */}
      <main className="flex-grow">
        <Hero /> {/* Hero is eagerly loaded */}
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Clients whySaudi={true} />
        <Banner />
        <Container7 />
        <Contact/>
        {/* <ContactBanner /> */}
      </main>

      {/* Footer */}
      <Footer
        contactNumber="+971 527 733 789"
        email="mail@beaconarabia.com"
        address="Office #39, 7th Floor, Dubai National Insurance Building, Port Saeed Deira, Dubai, UAE"
      />
    </div>
  );
};

export default Page;

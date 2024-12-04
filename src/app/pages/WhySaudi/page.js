"use client"
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports
const Banner = dynamic(() => import("@/app/components/Banner"));
const Clients = dynamic(() => import("@/app/components/ClientsContainer/Clients"));
const Popup = dynamic(() => import("@/app/components/Common/Popup"));
const WhatsAppChat = dynamic(() => import("@/app/components/WhatsAppChat/WhatsAppChat"));
const ContactBanner = dynamic(() => import("@/app/components/WhySaudiInner/ContactBanner/ContactBanner"));
const Container2 = dynamic(() => import("@/app/components/WhySaudiInner/Container2/Container2"));
const Container3 = dynamic(() => import("@/app/components/WhySaudiInner/Container3/Container3"));
const Container4 = dynamic(() => import("@/app/components/WhySaudiInner/Container4/Container4"));
const Container5 = dynamic(() => import("@/app/components/WhySaudiInner/Container5/Container5"));
const Container7 = dynamic(() => import("@/app/components/WhySaudiInner/Container7/Container7"));
const Footer = dynamic(() => import("@/app/components/WhySaudiInner/Footer/Footer"));
const Header = dynamic(() => import("@/app/components/WhySaudiInner/Header/Header"));
const Hero = dynamic(() => import("@/app/components/WhySaudiInner/Hero/Hero"));
const MobileHeader = dynamic(() => import("@/app/components/WhySaudiInner/MobileHeader/MobileHeader"));

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasPassedContainer3, setHasPassedContainer3] = useState(false);

  const handleContainer3Render = useCallback(() => {
    setHasPassedContainer3(true);
    setShowPopup(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {showPopup && <Popup setShowPopup={setShowPopup} />}
      
      <WhatsAppChat beaconSaudi="true" />
      <Header phoneNumber="+971 527 733 789" />
      <MobileHeader />
      
      <main className="flex-grow">
        <Hero />
        <Container2 />
        <Container3 onRender={handleContainer3Render} />
        <Container4 />
        <Container5 />
        <Clients whySaudi={true} />
        <Banner />
        <Container7 />
        <ContactBanner />
      </main>
      
      <Footer 
        contactNumber="+971 527 733 789" 
        email="mail@beaconarabia.com"
        address="Office #39, 7th Floor, Dubai National Insurance Building, Port Saeed Deira, Dubai, UAE" 
      />
    </div>
  );
};

export default Page;

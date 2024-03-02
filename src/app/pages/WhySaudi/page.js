import Banner from "@/app/components/Banner";
import ContactBanner from "@/app/components/WhySaudiInner/ContactBanner/ContactBanner";
import Container2 from "@/app/components/WhySaudiInner/Container2/Container2";
import Container3 from "@/app/components/WhySaudiInner/Container3/Container3";
import Container4 from "@/app/components/WhySaudiInner/Container4/Container4";
import Container5 from "@/app/components/WhySaudiInner/Container5/Container5";
import Container6 from "@/app/components/WhySaudiInner/Container6/Container6";
import Container7 from "@/app/components/WhySaudiInner/Container7/Container7";
import Footer from "@/app/components/WhySaudiInner/Footer/Footer";
import Header from "@/app/components/WhySaudiInner/Header/Header";
import Hero from "@/app/components/WhySaudiInner/Hero/Hero";
import MobileHeader from "@/app/components/WhySaudiInner/MobileHeader/MobileHeader";
import { container6 } from "@/app/contents/Data";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <MobileHeader />
      <Hero />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 data={container6} />
      <Banner />
      <Container7 />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default page;

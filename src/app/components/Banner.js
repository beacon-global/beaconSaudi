import Image from "next/image";
import React from "react";
import { SectionDescription, SectionTitle } from "./ButtonComponent";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <Image
        src="/banner.jpg"
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
        style={{objectFit: "cover" , objectPosition: "top" }}
        alt="banner"
      />
      <div className="bannerContent">
        <SectionTitle
          sectionText="A progressive hub for business"
          color="#fff"
          textAllign="center"
          padding="0 0 1.3227513227513228vw 0"
        />
        <h3>
        Positioned strategically in the heart of the Middle East, 
        Saudi Arabia serves as a dynamic hub for business growth. 
        It acts as a gateway to the region, facilitating expansion 
        of your reach and customer base. The government reinforces 
        this conducive business environment by offering support such 
        as tax exemptions, funding access, and aid with research and development initiatives.
        </h3>
      </div>
    </div>
  );
};

export default Banner;

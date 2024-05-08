import Image from "next/image";
import React from "react";
import { SectionDescription, SectionTitle } from "./ButtonComponent";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <Image
        src="/banner.webp"
        width={100}
        height={100}
        quality={100}
        priority={true}
        unoptimized
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
          Strategically located at the heart of the Middle East (as shown in the
          image), Saudi Arabia acts as a gateway to the entire region, enabling
          you to expand your reach and customer base significantly. The
          government further enhances the business environment by providing
          valuable support through tax exemptions, funding access, and
          assistance with research and development endeavors.
        </h3>
      </div>
    </div>
  );
};

export default Banner;

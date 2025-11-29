import React from "react";
import AboutSection from "../common/components/sections/aboutSection";
import TechLogoSection from "../common/components/sections/techLogoSection";
import HeaderBannerPage from "../common/components/header/headerBannerPage";

const AboutPage = () => {
  return (
    <>
      <HeaderBannerPage
        main_title={"About"}
        title={"Home"}
        subtitle={"About"}
      />

      <AboutSection />
      <TechLogoSection customClass={"py-10"} />
    </>
  );
};

export default React.memo(AboutPage);

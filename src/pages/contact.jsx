import React, { useEffect } from "react";
import TechLogoSection from "../common/components/sections/techLogoSection";
import HeaderBannerPage from "../common/components/header/headerBannerPage";
import FormSection from "../common/components/form/formSection";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderBannerPage
        main_title={"Contact"}
        title={"Home"}
        subtitle={"Contact"}
      />
      <FormSection />
      <TechLogoSection customclassName={"py-10"} />
    </>
  );
};

export default React.memo(ContactPage);

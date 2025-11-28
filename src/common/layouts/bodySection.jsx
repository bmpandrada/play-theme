import React from "react";
import HeroPlay from "../components/hero/heroPlay";
import FeaturesSection from "../components/sections/featureSection";

import CtaSection from "../components/sections/ctaSection";
import BlogSection from "../components/sections/blogSection";
import AboutSection from "../components/sections/aboutSection";

const BodySection = () => {
  return (
    <>
      <div
        id='home'
        className='relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-40'
      >
        <HeroPlay />
        <FeaturesSection />
        <AboutSection />
        <CtaSection />
        <BlogSection />
      </div>
    </>
  );
};

export default React.memo(BodySection);

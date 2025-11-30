import React, { useEffect } from "react";
import HeroPlay from "../common/components/hero/heroPlay";
import FeaturesSection from "../common/components/sections/featureSection";

import CtaSection from "../common/components/sections/ctaSection";
import BlogSection from "../common/components/sections/blogSection";
import AboutSection from "../common/components/sections/aboutSection";
import TechLogoSection from "../common/components/sections/techLogoSection";

const HomePage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className='relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-40'>
      <HeroPlay />
      <FeaturesSection />
      <AboutSection btnShow={true} />
      <CtaSection />
      <BlogSection />
      <TechLogoSection />
    </div>
  );
};

export default React.memo(HomePage);

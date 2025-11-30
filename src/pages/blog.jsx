import React, { useEffect } from "react";
import AboutSection from "../common/components/sections/aboutSection";
import TechLogoSection from "../common/components/sections/techLogoSection";
import HeaderBannerPage from "../common/components/header/headerBannerPage";
import BlogGrids from "../common/components/blogGrids";
import Pagination from "../common/components/pagination";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderBannerPage main_title={"Blog"} title={"Home"} subtitle={"Blog"} />
      <section className='pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark'>
        <div className='container mx-auto px-4'>
          <BlogGrids />
          <Pagination />
        </div>
      </section>
      <TechLogoSection customclassName={"py-10"} />
    </>
  );
};

export default React.memo(BlogPage);

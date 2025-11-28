import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import HeaderLogo from "./headerLogo";
import HeaderToggle from "./headerToggle";
import NavvLink from "./navLink";
import ThemeToggle from "./themeToggle";
import SignLink from "./signLink";

const HeaderNav = () => {
  const [navbarTogglerActive, setNavbarTogglerActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  useEffect(() => {
    const pageLinks = Array.from(
      document.querySelectorAll(".ud-menu-scroll"),
    ).filter((link) => link.getAttribute("to")?.startsWith("#"));

    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute("to");
      if (!targetId.startsWith("#")) return;

      e.preventDefault();
      const target = document.querySelector(targetId);
      if (!target) return;

      const headerOffset = 60;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    pageLinks.forEach((link) => link.addEventListener("click", handleClick));

    const handleScroll = () => {
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;

      pageLinks.forEach((link) => {
        const target = document.querySelector(link.getAttribute("to"));
        if (!target) return;
        const top = target.offsetTop - 73;
        const bottom = top + target.offsetHeight;
        link.classList.toggle("active", scrollPos >= top && scrollPos < bottom);
      });

      setIsSticky(scrollPos > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      pageLinks.forEach((link) =>
        link.removeEventListener("click", handleClick),
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleActive = () => setNavbarTogglerActive((prev) => !prev);

  return (
    <div
      className={`absolute top-0 left-0 z-40 flex items-center w-full ud-header transition-all duration-300 ${
        isSticky ? "sticky top-0 bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className='container px-4 mx-auto'>
        <div className='relative flex items-center justify-between -mx-4'>
          <HeaderLogo isSticky={isSticky} isDark={isDark} />
          <div className='flex items-center justify-between w-full px-4'>
            <div>
              <HeaderToggle
                handleActive={handleActive}
                navbarTogglerActive={navbarTogglerActive}
              />
              <NavvLink navbarTogglerActive={navbarTogglerActive} />
            </div>
            <div className='flex items-center justify-end pr-16 lg:pr-0'>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              <SignLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderNav);

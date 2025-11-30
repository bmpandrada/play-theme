import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ContextApi } from "./contextApi";

export function ContextProvider({ children }) {
  const [navbarTogglerActive, setNavbarTogglerActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const location = useLocation();

  const isHome = location.pathname === "/";

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

  const headerClasses = `absolute top-0 left-0 z-40 flex items-center w-full transition-all duration-300
  ${isSticky ? "sticky top-0 bg-white shadow-md dark:bg-dark-2" : ""}
  ${!isHome && !isSticky ? "bg-white dark:bg-dark-2 " : ""}
`;

  return (
    <ContextApi.Provider
      value={{
        navbarTogglerActive,
        isSticky,
        isDark,
        isHome,
        toggleTheme,
        handleActive,
        headerClasses,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

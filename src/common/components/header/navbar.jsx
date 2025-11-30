import React from "react";
import HeaderLogo from "./headerLogo";
import HeaderToggle from "./headerToggle";
import NavvLink from "./navLink";
import ThemeToggle from "./themeToggle";
import SignLink from "./signLink";
import { useTheme } from "../../context/contextApi";

const HeaderNav = () => {
  const {
    headerClasses,
    isSticky,
    isDark,
    isHome,
    handleActive,
    navbarTogglerActive,
    toggleTheme,
  } = useTheme();

  return (
    <div className={headerClasses}>
      <div className='container px-4 mx-auto '>
        <div className='relative flex items-center justify-between -mx-4'>
          <HeaderLogo isSticky={isSticky || !isHome} isDark={isDark} />
          <div className='flex items-center justify-between w-full px-4'>
            <div>
              <HeaderToggle
                handleActive={handleActive}
                navbarTogglerActive={navbarTogglerActive}
                isDark={isDark}
                isSticky={isSticky || !isHome}
              />
              <NavvLink navbarTogglerActive={navbarTogglerActive} />
            </div>
            <div className='flex items-center justify-end pr-16 lg:pr-0'>
              <ThemeToggle
                isDark={isDark}
                isHome={isHome}
                toggleTheme={toggleTheme}
              />
              <SignLink
                isSticky={isSticky || !isHome}
                isDark={isDark}
                isHome={isHome}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderNav);

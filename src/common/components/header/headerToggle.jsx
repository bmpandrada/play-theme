import React from "react";

const HeaderToggle = ({
  handleActive,
  navbarTogglerActive,
  isDark,
  isSticky,
  isHome,
}) => {
  const barColor = !isHome && isSticky && !isDark ? "bg-black" : "bg-white";

  return (
    <button
      aria-label={navbarTogglerActive ? "Close menu" : "Open menu"}
      id='navbarToggler'
      onClick={handleActive}
      className='absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-1.5 ring-primary focus:ring-2 lg:hidden'
    >
      <span
        className={`block h-0.5 w-[30px] my-1.5 transition-transform duration-300 ease-in-out
          ${navbarTogglerActive ? "rotate-45 translate-y-2" : ""}
          ${barColor}`}
      ></span>

      <span
        className={`block h-0.5 w-[30px] my-1.5 transition-opacity duration-300 ease-in-out
          ${navbarTogglerActive ? "opacity-0" : "opacity-100"}
          ${barColor}`}
      ></span>

      <span
        className={`block h-0.5 w-[30px] my-1.5 transition-transform duration-300 ease-in-out
          ${navbarTogglerActive ? "-rotate-45 -translate-y-2" : ""}
          ${barColor}`}
      ></span>
    </button>
  );
};

export default React.memo(HeaderToggle);

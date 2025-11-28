import React from "react";
import { Link } from "react-router";

const NavvLink = ({ navbarTogglerActive }) => {
  return (
    <nav
      id='navbarCollapse'
      className={`${
        !navbarTogglerActive ? "hidden" : ""
      } absolute right-4 top-full  w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6`}
    >
      <ul className='block lg:flex 2xl:ml-20'>
        <li className='relative group'>
          <Link
            to='/'
            className='flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70'
          >
            Home
          </Link>
        </li>
        <li className='relative group'>
          <Link
            to='/about'
            className='flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10'
          >
            About
          </Link>
        </li>

        <li className='relative group'>
          <Link
            to='/team'
            className='flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10'
          >
            Team
          </Link>
        </li>
        <li className='relative group'>
          <Link
            to='/contact'
            className='flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10'
          >
            Contact
          </Link>
        </li>
        <li className='relative group'>
          <Link
            to='blog-grids.html'
            className='flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10'
          >
            Blog
          </Link>
        </li>
        <li className='relative submenu-item group'>
          <Link
            to='javascript:void(0)'
            className='relative flex items-center justify-between py-2 mx-8 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10'
          >
            Pages
            <svg
              className='ml-2 fill-current'
              width='16'
              height='20'
              viewBox='0 0 16 20'
              fill='none'
              xmlns='http:/www.w3.org/2000/svg'
            >
              <path d='M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z' />
            </svg>
          </Link>
          <div className='submenu relative left-0 top-full hidden w-[250px] rounded-xs bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full'>
            <Link
              to='/about'
              className='block rounded-sm px-4 py-2.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
            >
              About Page
            </Link>
            <Link
              to='pricing.html'
              className='block rounded-sm px-4 py-2.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
            >
              Pricing Page
            </Link>
            <Link
              to='contact.html'
              className='block rounded-sm px-4 py-2.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
            >
              Contact Page
            </Link>
            <Link
              to='blog-grids.html'
              className='block rounded-sm px-4 py-2.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
            >
              Blog Grid Page
            </Link>
            <Link
              to='blog-details.html'
              className='block rounded-sm px-4 py-2.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
            >
              Blog Details Page
            </Link>
            <Link
              to='signup.html'
              className='block rounded-sm px-4 py-2.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
            >
              Sign Up Page
            </Link>
            <Link
              to='signin.html'
              className='block rounded-sm px-4 py-2.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
            >
              Sign In Page
            </Link>
            <Link
              to='404.html'
              className='block rounded-sm px-4 py-2.5 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'
            >
              404 Page
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(NavvLink);

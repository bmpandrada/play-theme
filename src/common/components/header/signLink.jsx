import { Link } from "react-router";

const SignLink = ({
  isSticky,
  isHome,
  isDark,
  handleActive,
  customClass = "hidden lg:flex",
}) => {
  const singInClass =
    !isHome || (!isSticky && isDark)
      ? "text-dark dark:text-white"
      : "lg:text-white";

  const singUpClass =
    !isHome || (!isSticky && !isDark)
      ? "lg:text-white signUpBtn2"
      : "text-white signUpBtn";

  return (
    <div className={`${customClass}`}>
      <Link
        to='/signin'
        onClick={handleActive}
        className={`loginBtn px-[22px] py-2 text-base font-medium hover:opacity-70 ${singInClass}`}
      >
        Sign In
      </Link>
      <Link
        to='/signup'
        onClick={handleActive}
        className={` px-6 py-2 text-base font-medium duration-300 ease-in-out rounded-md bg-white/20  hover:bg-white hover:text-dark
          ${singUpClass}`}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default SignLink;

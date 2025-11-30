import { Route, Routes } from "react-router";
import MainLayout from "./common/layouts/main-layouts";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import Contact from "./pages/contact";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import NotFoundPage from "./pages/notFoundPage";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;

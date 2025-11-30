import { Route, Routes } from "react-router";
import MainLayout from "./common/layouts/main-layouts";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import Contact from "./pages/contact";
import SignIn from "./pages/signIn";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<div>404</div>} />
      </Route>
    </Routes>
  );
};

export default App;

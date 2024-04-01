import "./assets/vendor/aos/aos.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/js/main.js";
import "./assets/vendor/swiper/swiper-bundle.min.css";

import Header from "./components/Header";
import useWebsite from "./custom_hook.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home/index.jsx";
import About from "./components/About/index.jsx";
import Support from "./components/Support/index.jsx";
import Backtotop from "./components/Backtotop.jsx";
import { Route, Routes } from "react-router-dom";
import Resources from "./components/Resources/index.jsx";
import Services from "./components/Services";
import Blog from "./components/Resources/Blog.jsx";
function App() {
  useWebsite();
  return (
    <>
      <Header />
      <Backtotop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />{" "}
        <Route path="/resources" element={<Resources />} />{" "}
        <Route path="/services" element={<Services />} />{" "}
        <Route path="/vaajlab" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

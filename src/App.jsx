import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import Prevention from "./Prevention";
import AboutPage from "./About";
import LicensePage from "./License";
import { useEffect } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prevention" element={<Prevention />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/license" element={<LicensePage />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      setTimeout(() => {
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default App;

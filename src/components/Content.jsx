import React, { useState, useEffect  } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Programme from "./pages/Programme";
import Actu from "./pages/Actu";
import Apropos from "./pages/Apropos";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Patricia from "./pages/Patricia";
import ThemePage from "./pages/ThemePage";
import "../styles/Content.css";

export default function Content() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return (
    <div className="app">
      {/* Le fond animé en dessous de tout */}
      <div className="moving-background"></div>

      {/* Le contenu du site */}
      <div className="content">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} closeMenu={closeMenu} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LFIDouai" element={<Home />} />
            <Route path="/LFIDouai/programme" element={<Programme />} />
            <Route path="/LFIDouai/programme/:theme" element={<ThemePage />} />
            <Route path="/LFIDouai/patricia" element={<Patricia />} />
            <Route path="/LFIDouai/actu" element={<Actu />} />
            <Route path="/LFIDouai/apropos" element={<Apropos />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

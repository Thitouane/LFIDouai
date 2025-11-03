import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programme from "./pages/Programme";
import Agir from "./pages/Agir";
import Apropos from "./pages/Apropos";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import ThemePage from "./pages/ThemePage"; 
import "../styles/Content.css";

export default function Content() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <Menu menuOpen={menuOpen} closeMenu={closeMenu} />

      <main className="content">
        <Routes>
          <Route path="/LFIDouai" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/programme/:theme" element={<ThemePage />} />   {/* route dynamique */}
          <Route path="/agir" element={<Agir />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </main>

      <Footer />
    
    </div>
  );
}

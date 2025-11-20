import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from '../assets/boulan2026-removebg.png';

export default function Header({ menuOpen, setMenuOpen }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Vérifie si le body a la classe "dark-mode"
    const checkDark = () => setIsDarkMode(document.body.classList.contains("dark-mode"));
    checkDark();

    // Optionnel : écoute les changements
    const observer = new MutationObserver(checkDark);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // on scroll vers le bas → cacher
        setHidden(true);
      } else {
        // on remonte → montrer
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <Link to="LFIDouai" className={` logo-link  ${hidden ? "header-hidden" : ""}`} onClick={() => setMenuOpen(false)}>
        {/*(menuOpen && isDarkMode) || (!menuOpen && !isDarkMode)  ? (
          <img src={logo_colored} alt="Logo" className="logo"/>
        ) : (*/
          <img src={logo} alt="Logo" className="logo"/>
        /*)*/}
      </Link>
      
      <button 
        className={`menu-button ${menuOpen ? "open" : "closed"}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "FERMER ✕" : "MENU ☰"}
      </button>
    </header>
  );
}

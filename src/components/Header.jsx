import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from '../assets/LOGO BLANC HORIZONTAL.png';
import logo_colored from '../assets/LOGO COULEUR HORIZONAL.png';

export default function Header({ menuOpen, setMenuOpen }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Vérifie si le body a la classe "dark-mode"
    const checkDark = () => setIsDarkMode(document.body.classList.contains("dark-mode"));
    checkDark();

    // Optionnel : écoute les changements
    const observer = new MutationObserver(checkDark);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
        {(menuOpen && isDarkMode) || (!menuOpen && !isDarkMode)  ? (
          <img src={logo_colored} alt="Logo" className="logo"/>
        ) : (
          <img src={logo} alt="Logo" className="logo"/>
        )}
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

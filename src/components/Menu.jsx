
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

import FaFacebookF from "../assets/logo-fb.png";
import FaInstagram from "../assets/logo-instagram.png";
import FaTikTok from "../assets/logo-tiktok.png";
import logo from '../assets/LOGO COULEUR HORIZONAL.png';

export default function Menu({ menuOpen, closeMenu }) {
  const [darkMode, setDarkMode] = useState(false);

  // Charger la préférence au démarrage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.body.classList.toggle("dark-mode", savedTheme);
  }, []);

  // Appliquer le thème à chaque changement
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`overlay ${menuOpen ? "open" : ""}`}>
        <nav className="overlay-menu" onClick={closeMenu}>
          <Link to="LFIDouai" className="lfired">Accueil</Link>
          <Link to="LFIDouai/programme" className="lfigreen">Le programme</Link>
          <Link to="/LFIDouai/agir" className="lfiyellow">Agir</Link>
          <Link to="/LFIDouai/apropos"className="lfipurple">À propos</Link>
        </nav>


        <div className="menu-bottom">
            <div className="menu-logo">
                <img src={logo} alt="Logo" className="logo-footer"/>
            </div>
            
            {/* 
            <div
                className={`theme-toggle ${darkMode ? "dark" : "light"}`}
                onClick={() => setDarkMode(!darkMode)}
                >
                <div className="slider">
                    {darkMode ? "🌙" : "☀️"}
                </div>
            </div> 
            */}
            

            <div className="menu-socials">
                <a href="https://www.facebook.com/LFIDouaisis/" target="_blank" rel="noreferrer">
                    <img src={FaFacebookF} alt="Logo" className="logo"/>
                </a>
                <a href="https://www.instagram.com/lfi_douai/" target="_blank" rel="noreferrer">
                    <img src={FaInstagram} alt="Logo" className="logo"/>
                </a>
                <a href="https://www.tiktok.com/@lfi.douai?lang=fr" target="_blank" rel="noreferrer">
                    <img src={FaTikTok} alt="Logo" className="logo"/>
                </a>
            </div>
        </div>

      </div>
  );
}


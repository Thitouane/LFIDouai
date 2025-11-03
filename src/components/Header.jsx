import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from '../assets/LOGO BLANC HORIZONTAL.png';
import logo_colored from '../assets/LOGO COULEUR HORIZONAL.png';

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="header">
      <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
        {menuOpen ? (
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

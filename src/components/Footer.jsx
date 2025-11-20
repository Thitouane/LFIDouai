import React from "react";
import "../styles/Footer.css";

import patricia from '../assets/boulan2026-removebg.png';
import logo from '../assets/LOGO COULEUR HORIZONAL.png';


import FaFacebookF from "../assets/logo-fb.png";
import FaInstagram from "../assets/logo-instagram.png";
import FaTikTok from "../assets/logo-tiktok.png";

export default function Footer() {
  return (
    <footer className="overlay-footer">
      
      <div className="menu-socials">
          {/*
            <h1 className="title-home">
              <span className="douai-home">Douai</span>
            </h1>
            <h2>
              <span className="dfp-home">Fière et Populaire</span>
            </h2>
          */}
          <img src={logo} alt="Logo" className="logo-footer"/>
          <br />
          <a href="https://www.facebook.com/LFIDouaisis/" target="_blank" rel="noreferrer">
              <img src={FaFacebookF} alt="Logo" className="logo invert-color"/>
          </a>
          <a href="https://www.instagram.com/lfi_douai/" target="_blank" rel="noreferrer">
              <img src={FaInstagram} alt="Logo" className="logo invert-color"/>
          </a>
          <a href="https://www.tiktok.com/@lfi.douai?lang=fr" target="_blank" rel="noreferrer">
              <img src={FaTikTok} alt="Logo" className="logo invert-color"/>
          </a>
      </div>
      
      
      
    </footer>
  );
}
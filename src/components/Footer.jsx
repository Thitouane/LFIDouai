import React from "react";
import "../styles/Footer.css";

import patricia from '../assets/PATRICIA BANDEAU.jpg';

import FaFacebookF from "../assets/logo-fb.png";
import FaInstagram from "../assets/logo-instagram.png";
import FaTikTok from "../assets/logo-tiktok.png";

export default function Footer() {
  return (
    <footer className="overlay-footer">
      
      <div className="menu-socials">
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
      
      <div className="bandeau-wrapper">
        <img src={patricia} alt="Logo" className="bandeau-image" />
      </div>
      
    </footer>
  );
}
// ...existing code...
import React, { useState, useEffect } from 'react';
// import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/logo-beffroi.png';
import actionPopLogo from '../assets/action-pop.png';
import facebookLogo from '../assets/logo-fb.png';
import instaLogo from '../assets/logo-instagram.png';
import tiktokLogo from '../assets/logo-tiktok.png';

const Header = ({ onShrinkChange }) => {
  const [shrink, setShrink] = useState(false);

  const handleActionClick = () => {
    window.open('https://actionpopulaire.fr/groupes/16a9d6ad-c990-457c-b5e0-81393a93a902/', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldShrink = window.scrollY > 100;
      setShrink(shouldShrink);
      onShrinkChange?.(shouldShrink);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onShrinkChange]);

  return (
    <header className={shrink ? 'header shrink' : 'header'}>
      <div className="header-inner">
        <button className="left-button" onClick={handleActionClick}>
          <img src={actionPopLogo} alt="Action" /> Rejoignez-nous !
        </button>
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <div className="title-block">
          <div className="title-social">
            <h1></h1>
            <div className="social-links">
              <a href="https://www.facebook.com/LFIDouaisis/" target="_blank" rel="noopener noreferrer">
                <img src={facebookLogo} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/lfi_douai/" target="_blank" rel="noopener noreferrer">
                <img src={instaLogo} alt="Insta" />
              </a>
              <a href="https://www.tiktok.com/@lfi.douai?lang=fr" target="_blank" rel="noopener noreferrer">
                <img src={tiktokLogo} alt="Insta" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useEffect, useRef, useState } from 'react';
import '../styles/Footer.css';
import actionPopLogo from '../assets/action-pop.png';
import facebookLogo from '../assets/logo-fb.png';
import instaLogo from '../assets/logo-instagram.png';
import tiktokLogo from '../assets/logo-tiktok.png';

const Footer = () => {
  const ref = useRef(null);
  const [sticky, setSticky] = useState(false);
  
  const handleActionClick = () => {
    window.open('https://actionpopulaire.fr/groupes/16a9d6ad-c990-457c-b5e0-81393a93a902/', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const header = document.querySelector('.header');
    const content = document.querySelector('.content') || document.querySelector('.main') || document.querySelector('#root > .App');

    if (!header) {
      // fallback simple scroll check
      const onScroll = () => {
        const should = window.scrollY > 100;
        setSticky(should);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        // ent.isIntersecting=false => header hors écran
        setSticky(!ent.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    io.observe(header);

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    const height = el ? el.getBoundingClientRect().height : 0;
    const content = document.querySelector('.content') || document.querySelector('.main') || document.querySelector('#root > .App');

    if (sticky) {
      el?.classList.add('sticky');
      if (content) content.style.paddingBottom = `${height}px`;
    } else {
      el?.classList.remove('sticky');
      if (content) content.style.paddingBottom = '';
    }

    return () => {
      if (content) content.style.paddingBottom = '';
    };
  }, [sticky]);

  return (
    <footer ref={ref} className="site-footer">
      <div className="footer-inner">
        <button className="left-button-footer" onClick={handleActionClick}>
            <img src={actionPopLogo} alt="Action" /> Rejoignez-nous !
        </button>
        <div className="footer-right">
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
    </footer>
  );
};

export default Footer;
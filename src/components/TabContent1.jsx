import React, { useEffect } from 'react';
import '../styles/TabContent1.css';

const TabContent1 = () => {
  
  useEffect(() => {
    const parseFB = () => {
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
      }
    };

    // 1️⃣ parse au premier affichage
    const timeout = setTimeout(parseFB, 300);

    // 2️⃣ re-parse après chaque resize (mobile rotation etc.)
    window.addEventListener("resize", parseFB);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", parseFB);
    };
  }, []);

  return (
    <section>
      <h2>Actualité</h2>
      <div className="tab-content">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/LFIDouaisis/"
          data-tabs="timeline"
          data-width="800"   // 👈 largeur souhaitée
          data-height="800"
          data-small-header="true"
          data-hide-cover="true"
          data-show-facepile="true"
          data-adapt-container-width="true"
        >
          <blockquote
            cite="https://www.facebook.com/LFIDouaisis/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/LFIDouaisis/">
              LFI Douaisis
            </a>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TabContent1;

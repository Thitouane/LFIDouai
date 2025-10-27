import React, { useEffect } from 'react';
import '../styles/TabContent1.css';

const TabContent1 = () => {

  useEffect(() => {
    const checkFB = () => {
      if (window.FB && document.querySelector('.fb-page')) {
        window.FB.XFBML.parse();
      } else {
        // Réessaie après un petit délai si FB n’est pas encore prêt
        setTimeout(checkFB, 500);
      }
    };
    checkFB();
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

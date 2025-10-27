import React, { useEffect } from 'react';
import '../styles/TabContent1.css';

const TabContent1 = () => {

  useEffect(() => {
    const loadFB = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
        return;
      }

      // Injecte le SDK Facebook s'il n'existe pas encore
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.FB.init({ xfbml: true, version: "v17.0" });
      };
      document.body.appendChild(script);
    };

    loadFB();

    // Re-parse après resize pour éviter le rendu compressé
    window.addEventListener("resize", loadFB);

    return () => {
      window.removeEventListener("resize", loadFB);
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

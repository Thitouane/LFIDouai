import React, { useEffect } from 'react';
import '../styles/TabContent1.css';

const TabContent1 = () => {

  useEffect(() => {
    // Recharge le plugin FB quand le composant est monté
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <section>
      <h2>Actualité</h2>
      <div className="tab-content">
        <div className="fb-page" 
            data-href="https://www.facebook.com/LFIDouaisis/"
            data-tabs="timeline"
            data-width="600"
            data-height="800"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="true"
            data-show-facepile="true"
            >
          <blockquote cite="https://www.facebook.com/LFIDouaisis/" 
                      className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/LFIDouaisis/">LFI Douaisis</a>
          </blockquote>
        </div>
      </div>   
    </section>
  );
};

export default TabContent1;

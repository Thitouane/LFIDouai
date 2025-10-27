import React, { useEffect } from 'react';
import '../styles/TabContent1.css';

const TabContent1 = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.FB && document.querySelector(".fb-page")) {
        window.FB.XFBML.parse();
        clearInterval(interval); // ✅ évite les boucles infinies
      }
    }, 500);

    // re-parse après resize (rare mais utile)
    const resizeHandler = () => window.FB && window.FB.XFBML.parse();
    window.addEventListener("resize", resizeHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <section>
      <h2>Actualité</h2>
      <div className="tab-content">
        <iframe
          title="Facebook"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLFIDouaisis&tabs=timeline&width=500&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true"
          width="500"
          height="800"
          style={{ border: "none", overflow: "hidden", width: "500" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
};

export default TabContent1;


import React from "react";
import "../../styles/pages/Home.css";
import Apropos from "../pages/Apropos";
import { useNavigate } from "react-router-dom";
import Agir from "../pages/Agir";
import { Link } from "react-router-dom";

import patricia from '../../assets/boulan2026-removebg.png';
import programme from '../../assets/lfi-group.webp';

export default function Home() {
  const navigate = useNavigate();

  const goToProgramme = () => {
    navigate("LFIDouai/programme");
  };

  return (
    <section>
      {/* Bandeau Patricia */}
      <div className="bandeau-wrapper">
        <img src={patricia} alt="Logo" className="bandeau-image logo" />
      </div>
     
      <br />

      <Apropos />


      <article className="theme-card programme-block">
        <Link
          to={`/LFIDouai/programme`}
          className="theme-link"
          aria-label={`Voir Programme`}
          style={{ backgroundImage: `url(${programme})` }}
        >
          <div className="theme-overlay"></div>

          <div className="theme-body">
            <h2 className="theme-title">Notre Programme</h2>
          </div>
        </Link>
      </article>


      <Agir />

     
    </section>
  );
}

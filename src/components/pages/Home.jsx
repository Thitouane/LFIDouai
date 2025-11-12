
import React from "react";
import "../../styles/pages/Home.css";
import Apropos from "../pages/Apropos";
import { useNavigate } from "react-router-dom";
import Agir from "../pages/Agir";

import patricia from '../../assets/boulan2026-removebg.png';

export default function Home() {
  const navigate = useNavigate();

  const goToProgramme = () => {
    navigate("/programme");
  };

  return (
    <section>
        <div className="bandeau-wrapper">
          <img src={patricia} alt="Logo" className="bandeau-image" />
      </div>
     
      <br />

      <Apropos />

      <div className="programme-block"> 
        <button className="programme-cta-btn " onClick={() => goToProgramme()}>
          <p className="multicolor">Notre Programme</p>
        </button>
      </div> 

      <Agir />

     
    </section>
  );
}

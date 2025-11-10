
import React from "react";
import "../../styles/pages/Home.css";
import Apropos from "../pages/Apropos";
import { useNavigate } from "react-router-dom";
import Agir from "../pages/Agir";

export default function Home() {
  const navigate = useNavigate();

  const goToProgramme = () => {
    navigate("/programme");
  };

  return (
    <section>
      <h1 className="title-home">
        <span className="douai-home">Douai</span><br />
      </h1>
      <h2> 
        <span className="dfp-home">Fière et Populaire</span>
      </h2>
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

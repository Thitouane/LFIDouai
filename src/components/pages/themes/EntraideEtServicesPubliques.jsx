import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";

export default function EntraideEtServicesPubliques() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src="https://via.placeholder.com/1200x600?text=Transition+%C3%A9cologique"
          alt="L’entraide et les services publics"
        />
        <div className="theme-hero-overlay">
          <h1>L’entraide et les services publics : mettre la solidarité au cœur de l’action municipale</h1>
        </div>
      </div>

      <div className="theme-content">
         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Link to="/programme" className="back-button">
          ← Retour au programme
        </Link>
      </div>
    </article>
  );
}

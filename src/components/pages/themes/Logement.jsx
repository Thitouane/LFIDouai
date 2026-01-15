import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/logement.jpg';

export default function Logement() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="logement"
        />
        <div className="theme-hero-overlay">
          <h1>Le logement : un droit collectif d’habiter de façon digne et durable</h1>
        </div>
      </div>

      <div className="theme-content">
              <p>
                À Douai, des milliers de personnes vivent dans des logements mal isolés, trop
chers, ou indignes. Plus de 3 000 logements sont vides tandis que des
habitants dorment à la rue ou dans des immeubles laissés à l’abandon. 
              <br></br><br></br>
              Cette
situation est à la fois injuste et absurde. Nous pouvons agir. Il est temps de faire du
logement une priorité locale pour que chacune et chacun puisse vivre dignement,
sans précarité ni insécurité.
              </p>
              <br></br>
      
      
              <h2>
                <span className="mesures-title">Nos mesures pour faire mieux</span>
              </h2>
      
              <ul className="theme-list">
                <li>
                  ➔ <span className="theme-bold">Renforcer</span> les services municipaux d’inspection pour lutter efficacement
contre les marchands de sommeil et repérer les logements indignes sur
l'ensemble du territoire communal <em className="lfipurple">(faisable dès la première année)</em>
                </li>
              <br></br>
      
                <li>
                  ➔ <span className="theme-bold">Garantir</span> des rues et des logements dignes et bien entretenus dans tous les
quartiers de la ville, à commencer par les quartiers abandonnés de Douai
                </li>
              <br></br>
              
                <li>
                  ➔ <span className="theme-bold">Créer</span> des points de chaleur dans les bâtiments publics pour accueillir les
personnes sans solution de chauffage <em className="lfipurple">(faisable dès la première année)</em>
                </li>
              <br></br>
              
                <li>
                  ➔ <span className="theme-bold">Réquisitionner</span> les logements vides pour héberger les personnes sans-abri
                </li>
              <br></br>
              
                <li>
                  ➔ <span className="theme-bold">Anonymiser</span> les demandes de logement social pour mettre fin au clientélisme
dans l’attribution des logements <em className="lfipurple">(faisable dès la première année)</em>
                </li>
              <br></br>
              
                <li>
                 ➔ <span className="theme-bold">Exiger</span> une clause “zéro éloignement imposé” dans tous les projets de
réhabilitation pour éviter les déplacements forcés des habitants, notamment
nos aînés
                </li>
              <br></br>
              
                <li>
                 ➔ <span className="theme-bold">Créer</span> une outil-thèque municipale pour permettre aux habitants d’emprunter
gratuitement du matériel de bricolage, de jardinage ou de réparation
                </li>
              <br></br>
              
              </ul>
              <br></br>
      
              <Link to="/programme" className="back-button">
                ← Retour au programme
              </Link>
            </div>
    </article>
  );
}

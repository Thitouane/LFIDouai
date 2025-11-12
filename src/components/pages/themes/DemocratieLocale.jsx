import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/democratie.jpg';

export default function DemocratieLocale() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="Démocratie locale"
        />
        <div className="theme-hero-overlay">
          <h1>La démocratie locale : commencer la révolution citoyenne</h1>
        </div>
      </div>

      <div className="theme-content">
        <p>
          <span className="lfired theme-bold">Depuis douze ans, Frédéric Chéreau a fait de la “démocratie participative” un
          argument de communication plus qu’un véritable partage du pouvoir. Résultat
          : des conseils de quartier désertés et des habitants ignorés.</span> 
          <br></br>
                  Nous voulons
          rompre avec cette démocratie d’apparence pour redonner du pouvoir réel aux
          Douaisiens. Parce qu’on ne répond pas aux urgences écologiques et sociales sans
          changer la manière dont on décide.
        </p>
        <br></br>

        <h2 className="lfipurple">
          Nos mesures pour faire mieux
        </h2>
        <ul className="theme-list">
          <li>
➔ <span className="theme-bold">Mettre</span> en ligne un tableau de bord citoyen avec le suivi des engagements du
mandat (faisable dès la première année)
          </li>
          <li>
            ➔ <span className="theme-liste-odd">
<span className="theme-bold">Donner</span> aux habitants le droit de déclencher une votation citoyenne à partir
de 1000 signatures (faisable dès la première année)
            </span>
          </li>
          <li>
➔ <span className="theme-bold">Permettre</span> l’organisation d’un vote de révocation d’un ou d’une élue en cas de
manquement grave dès lors qu’une pétition atteint 1000 signatures (faisable
dès la première année)
          </li>
          <li>
            ➔ <span className="theme-liste-odd">
<span className="theme-bold">Transformer</span> les conseils de quartier en Assemblées de quartier composées
à 50% de citoyens tirés au sort et dotées d’un pouvoir décisionnaire (faisable
dès la première année)</span>
          </li>
          <li>
            ➔ <span className="theme-bold">Rendre</span> obligatoire la consultation de l’Assemblée de quartier pour tout projet
d’aménagement local
          </li>
          <li>
           ➔ <span className="theme-liste-odd"><span className="theme-bold">Donner</span> un droit de motion aux Assemblées de quartier pour inscrire un sujet
à l’ordre du jour du Conseil Municipal, avec intervention en séance (faisable
dès la première année)</span>
          </li>
          <li>
           ➔ <span className="theme-bold">Exiger</span> la présence mensuelle des élus de quartier, avec publication des
dates (faisable dès la première année)
          </li>
          <li>
           ➔ <span className="theme-liste-odd"><span className="theme-bold">Tripler</span> le budget participatif pour atteindre 300 000€ par an, dont une part
spécifique pour les quartiers prioritaires de la ville (Dorignies, le Faubourg de
Béthune, Frais-Marais et la Résidence Gayant)</span>
          </li>
        </ul>
        <br></br>


        <Link to="/programme" className="back-button">
          ← Retour au programme
        </Link>
      </div>
    </article>
  );
}
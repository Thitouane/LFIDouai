import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/antiracisme.jpg';

export default function Antiracisme() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="Douai antiraciste, féministe et LGBTI"
        />
        <div className="theme-hero-overlay">
          <h1>Douai antiraciste, féministe et LGBTI : une ville fière de sa diversité, forte de ses différences</h1>
        </div>
      </div>

      <div className="theme-content">
        <p>
          À Douai comme ailleurs, les discriminations sont une réalité quotidienne :
          inégalités salariales, violences sexistes, racistes ou LGBTI-phobes. <br></br><span className="theme-bold">Elles
          brisent des vies.</span> 
        <br></br><br></br>
        <span>La commune a le pouvoir et le devoir d’agir.</span> En nommant les
          choses, en accompagnant les victimes et en garantissant l’égalité réelle dans ses
          politiques publiques. C’est une question de dignité, de justice et d’égalité
          républicaine.
        </p>
        <br></br>


        <h2>
          <span className="mesures-title">Nos mesures pour faire mieux</span>
        </h2>

        <ul className="theme-list">
          <li>
            ➔ Mener des campagnes continues contre les violences sexistes, racistes et
LGBTI-phobes dans l’espace public
          </li>
        <br></br>

          <li>
            ➔ <span >
              Adopter un plan municipal contre les violences sexistes et sexuelles,
comprenant :
        <br></br>
◆ l’augmentation des capacités d’hébergement d’urgence pour les
femmes victimes,
        <br></br>
◆ la création d’un centre de prévention et d’accompagnement pour
conjoints violents présumés en lien avec la justice et Douaisis Agglo.
            </span>
          </li>
        <br></br>
        
          <li>
            ➔ Étudier la création d’hébergements d’urgence pour les personnes LGBTI
victimes de discriminations
          </li>
        <br></br>
        
          <li>
            ➔ <span>Financer des projets éducatifs et associatifs de lutte contre les idées
d’extrême-droite</span>
          </li>
        <br></br>
        
          <li>
            ➔ Mettre en œuvre un plan de rattrapage pour assurer l’égalité salariale
femmes-hommes au sein de la collectivité
          </li>
        <br></br>
        
          <li>
           ➔ <span>Revaloriser les rémunérations des métiers majoritairement féminins dans la
fonction publique municipale</span>
          </li>
        <br></br>
        
          <li>
           ➔ Améliorer l’accueil des résidents étrangers : guide multilingue, point d’accueil
en mairie, cours de français
          </li>
        <br></br>
        
          <li>
           ➔ <span>Célébrer chaque année une Journée douaisienne de la solidarité avec le
peuple palestinien</span>
          </li>
        <br></br>
        
          <li>
           ➔ Nouer de nouveaux jumelages avec un pays du Maghreb et un pays
hispanophone
          </li>
        <br></br>
        
          <li>
            ➔ <span>Renommer des rues en hommage à des figures populaires, féministes,
ouvrières et décoloniales</span>
          </li>
        <br></br>
        
          <li>
            ➔ Enrichir les bibliothèques municipales avec des ouvrages critiques, des
sciences humaines et des presses engagées
          </li>
        </ul>
        <br></br>

        <Link to="/LFIDouai/programme" className="back-button">
          ← Retour au programme
        </Link>
      </div>
    </article>
  );
}

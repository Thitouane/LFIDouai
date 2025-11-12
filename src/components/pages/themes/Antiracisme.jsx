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
          inégalités salariales, violences sexistes, racistes ou LGBTI-phobes. <span className="theme-bold lfired">Elles
          brisent des vies.</span> 
        <br></br>
        <span className="lfigreen">La commune a le pouvoir et le devoir d’agir.</span> En nommant les
          choses, en accompagnant les victimes et en garantissant l’égalité réelle dans ses
          politiques publiques. C’est une question de dignité, de justice et d’égalité
          républicaine.
        </p>
        <br></br>


        <h2 className="lfipurple">
          Nos mesures pour faire mieux
        </h2>

        <ul className="theme-list">
          <li>
            ➔ Mener des campagnes continues contre les violences sexistes, racistes et
LGBTI-phobes dans l’espace public
          </li>
          <li>
            ➔ <span className="theme-liste-odd">
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
          <li>
            ➔ Étudier la création d’hébergements d’urgence pour les personnes LGBTI
victimes de discriminations
          </li>
          <li>
            ➔ <span className="theme-liste-odd">Financer des projets éducatifs et associatifs de lutte contre les idées
d’extrême-droite</span>
          </li>
          <li>
            ➔ Mettre en œuvre un plan de rattrapage pour assurer l’égalité salariale
femmes-hommes au sein de la collectivité
          </li>
          <li>
           ➔ <span className="theme-liste-odd">Revaloriser les rémunérations des métiers majoritairement féminins dans la
fonction publique municipale</span>
          </li>
          <li>
           ➔ Améliorer l’accueil des résidents étrangers : guide multilingue, point d’accueil
en mairie, cours de français
          </li>
          <li>
           ➔ <span className="theme-liste-odd">Célébrer chaque année une Journée douaisienne de la solidarité avec le
peuple palestinien</span>
          </li>
          <li>
           ➔ Nouer de nouveaux jumelages avec un pays du Maghreb et un pays
hispanophone
          </li>
          <li>
            ➔ <span className="theme-liste-odd">Renommer des rues en hommage à des figures populaires, féministes,
ouvrières et décoloniales</span>
          </li>
          <li>
            ➔ Enrichir les bibliothèques municipales avec des ouvrages critiques, des
sciences humaines et des presses engagées
          </li>




        </ul>
        <br></br>

        <h2 className="lfiyellow">
         ✊ Une ville solidaire, juste et citoyenne
        </h2>
        <p>
          Douai doit devenir une ville du quotidien, de l’entraide et de la solidarité. Une ville où
          la richesse se mesure à la qualité de vie des habitants et pas au nombre de
          nouveaux pavés posés dans le centre.
        <br></br>
          Nous voulons donner à Douai le goût de l’égalité, la fierté d’être une ville populaire.
          Et cela ne se fera pas en gérant les affaires comme avant, mais en écoutant enfin
          celles et ceux qui n’ont jamais eu leur part.
        <br></br>
          Nous sommes prêts, beaucoup d’entre vous l’êtes aussi. Il est temps de tout
          donner pour celles et ceux qui n’ont jamais rien.
        </p>
        <br></br>

        <Link to="/programme" className="back-button">
          ← Retour au programme
        </Link>
      </div>
    </article>
  );
}

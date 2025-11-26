import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/servicePublique.jpg';

export default function EntraideEtServicesPubliques() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="L’entraide et les services publics"
        />
        <div className="theme-hero-overlay">
          <h1>L’entraide et les services publics : mettre la solidarité au cœur de l’action municipale</h1>
        </div>
      </div>

     <div className="theme-content">
                   <p>
                    Une part trop importante de la population vit sous le seuil de pauvreté. Les
demandes de logement social explosent, les associations sont débordées et
les services municipaux manquent de moyens pour répondre aux besoins de
la population.
                   <br></br><br></br>
                  Face aux reculs imposés par les gouvernements successifs, nous
voulons faire de la commune un rempart contre les inégalités et la précarité. Nous
agirons sur tous les leviers à notre disposition pour améliorer à la fois les conditions
de travail des habitants les plus modestes et celles des agents publics qui les
accompagnent.
                   </p>
                   <br></br>
           
           
                   <h2>
                    <span className="mesures-title">Nos mesures pour faire mieux</span>
                  </h2>
           
                   <ul className="theme-list">
                     <li>
                       ➔ <span className="theme-bold">Créer</span> un Revenu Jeune Garanti : une aide municipale pour les 18-25 ans
vivant sous le seuil de pauvreté, qu’ils soient étudiants, en formation, en
emploi précaire, en recherche d’emploi ou sans ressources
                     </li>
                   <br></br>
           
                     <li>
                       ➔ <span className="theme-bold">Mettre en place</span> les chèques “Douai Solidaire” : 50€ distribués deux fois par
an aux foyers modestes à dépenser dans les commerces de proximité bio,
locaux et durables
                     </li>
                   <br></br>
                   
                     <li>
                       ➔ <span className="theme-bold">Soutenir</span> les épiceries sociales et solidaires grâce à des subventions, des
locaux ou une aide à l’achat de denrées alimentaires
                     </li>
                   <br></br>
                   
                     <li>
                       ➔ <span className="theme-bold">Doter</span> les associations de moyens pour agir sur la santé mentale, les
addictions et la précarité
                     </li>
                   <br></br>
                   
                     <li>
                       ➔ <span className="theme-bold">Supprimer</span> progressivement le temps partiel contraint dans la fonction
publique municipale
                     </li>
                   <br></br>
                   
                     <li>
                      ➔ <span className="theme-bold">Revaloriser</span> les rémunérations des métiers majoritairement féminins au sein
de la collectivité
                     </li>
                   <br></br>
                   
                     <li>
                      ➔ <span className="theme-bold">Mettre</span> en œuvre un plan de rattrapage pour l’égalité salariale
femmes-hommes
                     </li>
                   <br></br>
                   
                     <li>
                      ➔ <span className="theme-bold">Assurer</span> l’accessibilité de 100% des bâtiments publics et commerces aux
personnes en situation de handicap
                     </li>
                   <br></br>
                   
                   </ul>
                   <br></br>
           
                   <Link to="/LFIDouai/programme" className="back-button">
                     ← Retour au programme
                   </Link>
                 </div>
    </article>
  );
}

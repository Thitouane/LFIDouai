import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/ecolo.jpg';

export default function EcologiePopulaire() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="Ecologie populaire"
        />
        <div className="theme-hero-overlay">
          <h1>L’écologie populaire : garantir notre avenir en commun</h1>
        </div>
      </div>

      <div className="theme-content">
        <p>
          <span className="lfigreen theme-bold">Le dérèglement climatique est là. À Douai, l’air devient irrespirable, les orages
sont plus violents, les inondations plus fréquentes et la chaleur parfois si
écrasante qu’elle empêche les enfants d’aller à l’école.</span> 
          <br></br>
                  Et pourtant, notre ville
reste insuffisamment préparée à ces bouleversements. Face aux gouvernements qui
nous emmènent droit dans le mur, nous faisons un autre choix : celui de l’écologie
populaire. Une écologie qui protège le vivant, améliore le quotidien et répare les
injustices.
        </p>
        <br></br>

        
        <h2 className="lfipurple">
          Nos mesures pour faire mieux
        </h2>
        <ul className="theme-list">
          <li>
➔ <span className="theme-bold">Établir</span> avec les habitants un diagnostic écologique communal complet dès la
première année (faisable dès la première année)
          </li>
          <li>
            ➔ <span className="theme-liste-odd">
<span className="theme-bold">Lancer</span> un plan énergie renouvelable ambitieux (toitures solaires, réseaux de
chaleur, hydroliennes aux écluses)
            </span>
          </li>
          <li>
➔ <span className="theme-bold">Adopter</span> un plan pluriannuel de végétalisation de l’espace public et de
création d'îlots de fraîcheur en fixant des objectifs précis (ex : végétalisation
de tous les parkings de plus de 500 m² d’ici 2030)
          </li>
          <li>
            ➔ <span className="theme-liste-odd">
<span className="theme-bold">Réduire</span> les déplacements en voiture de l’équipe municipale et privilégier
l’utilisation de vélos et de véhicules légers (faisable dès la première année)</span>
          </li>
          <li>
            ➔ <span className="theme-bold">Créer</span> une régie publique de l’eau avec une gouvernance citoyenne, une
tarification progressive de l’eau et la gratuité des premiers mètres cubes
d’eau indispensables à la vie
          </li>
          <li>
           ➔ <span className="theme-liste-odd"><span className="theme-bold">Faire</span> de la cantine municipale un modèle 100 % bio, local et sans produits
industriels en soutenant les producteurs locaux</span>
          </li>
          <li>
           ➔ <span className="theme-bold">Intégrer</span> le critère de bien-être animal dans la commande publique de la
cantine scolaire
          </li>
          <li>
           ➔ <span className="theme-liste-odd"><span className="theme-bold">Faire</span> de chaque école un lieu d’écologie vivante : jardins potagers, classes
climat, ateliers pratiques avec les associations et l’IMT</span>
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

/*

 
Nos mesures pour faire mieux :
➔ 
➔ 
➔ 
➔ 
➔ 
➔ 
➔ 
➔ 


*/
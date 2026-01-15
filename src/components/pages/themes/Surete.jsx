import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/surete.jpg';

export default function Surete() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="surete"
        />
        <div className="theme-hero-overlay">
          <h1>La sûreté : assurer le droit à la sûreté pour toutes et tous</h1>
        </div>
      </div>

       <div className="theme-content">
                         <p>
                          Le droit à la sûreté est un principe fondamental pour toutes et tous – quel que
soit son quartier, son origine ou son genre.
                         <br></br><br></br>
                        Nous défendons une approche
fondée sur la prévention et la présence humaine plutôt que sur la multiplication de
dispositifs sécuritaires coûteux et inefficaces. Ce n’est pas en armant quelques
policiers municipaux ou en ajoutant toujours plus de caméras – alors qu’il y en a déjà
plus de 150 – que l’on résoudra quoi que ce soit. Notre ville sera sûre parce qu’elle
sera solidaire.
                         </p>
                         <br></br>
                 
                 
                         <h2>
                          <span className="mesures-title">Nos mesures pour faire mieux</span>
                        </h2>
                 
                         <ul className="theme-list">
                           <li>
                             ➔ <span className="theme-bold">Concentrer</span> la mission de la police municipale sur la présence de terrain, la
tranquillité publique, la protection des enfants aux abords des écoles et la
proximité avec les habitants
                           </li>
                         <br></br>
                 
                           <li>
                             ➔ <span className="theme-bold">Refuser</span> tout armement létal de la police municipale
                           </li>
                         <br></br>
                         
                           <li>
                             ➔ <span className="theme-bold">Investir</span> dans du matériel adapté et de qualité : vélos électriques, gilets
pare-balles, équipement de protection
                           </li>
                         <br></br>
                         
                           <li>
                             ➔ <span className="theme-bold">Pérenniser</span> les postes de médiateurs de proximité
                           </li>
                         <br></br>
                         
                           <li>
                            ➔ <span className="theme-bold">Déployer</span> un éclairage public intelligent, avec capteurs de mouvement et gradation de l’intensité, dans les zones et aux horaires décidés en conseils de quartier.
                           </li>
                         <br></br>
                         
                           <li>
                             ➔ <span className="theme-bold">Évaluer</span> régulièrement les politiques de sûreté par des enquêtes en
porte-à-porte et des retours d’habitants

                           </li>
                         <br></br>
                         
                           <li>
                            ➔ <span className="theme-bold">Instaurer</span> un moratoire sur la vidéosurveillance et lancer un audit indépendant
sur son efficacité et son coût réel

                           </li>
                         <br></br>
                         
                           <li>
                            ➔ <span className="theme-bold">Exiger</span> de l’Etat l’augmentation des effectifs de la police nationale et
judiciaire, seule compétente pour lutter contre les infractions plus graves
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

import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/asso.jpg';

export default function EngagementAssociatif() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="L’engagement associatif, sportif et culturel"
        />
        <div className="theme-hero-overlay">
          <h1>L’engagement associatif, sportif et culturel : le pilier d’un contre-pouvoir populaire</h1>
        </div>
      </div>

       <div className="theme-content">
                                          <p>
                                          Les associations, clubs sportifs et structures culturelles jouent un rôle vital :
elles créent du lien, émancipent et permettent de lutter contre l’isolement. Mais
elles sont fragilisées par le désengagement des pouvoirs publics et les coupes
budgétaires.
                                          <br></br><br></br>
                                        Nous voulons leur donner une place centrale dans la commune, avec
des financements stables et équitables, et la reconnaissance de leur rôle social et
politique.
                                          </p>
                                          <br></br>
                                  
                                  
                                          <h2>
          <span className="mesures-title">Nos mesures pour faire mieux</span>
        </h2>
                                  
                                          <ul className="theme-list">
                                            <li>
                                              ➔ <span className="theme-bold">Généraliser</span> les conventions pluriannuelles de subventions pour sécuriser le
financement des associations, clubs et structures culturelles sur plusieurs
années plutôt qu’une année à la fois

                                            </li>
                                          <br></br>
                                  
                                            <li>
                                              ➔ <span className="theme-bold">Bonifier</span> les aides aux associations, structures et clubs engagés contre le
racisme, le sexisme, l’homophobie, la transphobie et le validisme
                                            </li>
                                          <br></br>
                                          
                                            <li>
                                              ➔ <span className="theme-bold">Évaluer</span> les freins à la pratique sportive et planifier les équipements
nécessaires à leur levée
                                            </li>
                                          <br></br>
                                          
                                            <li>
                                              ➔ <span className="theme-bold">Créer</span> une salle de remise en forme municipale à Frais-Marais pour répondre
à un besoin non couvert en matière de sport de proximité
                                            </li>
                                          <br></br>
                                          
                                            <li>
                                              ➔ <span className="theme-bold">Atteindre</span> l’équité entre sport féminin et masculin dans l’attribution des
subventions
      
                                            </li>
                                          <br></br>
                                          
                                            <li>
                                             ➔ <span className="theme-bold">Soutenir</span> les pratiques inclusives : sport santé, parasport, sport féminin
      
                                            </li>
                                          <br></br>
                                          
                                            <li>
                                             ➔ <span className="theme-bold">Lancer</span> une Olympiade des Quartiers pour démocratiser le sport et favoriser
la mixité sociale
      
                                            </li>
                                          <br></br>
                                            <li>
                                             ➔ <span className="theme-bold">Mettre</span> en place des parcours culturels valorisant l’histoire locale, les luttes et
les habitants
      
                                            </li>
                                          <br></br>
                                          
                                            <li>
                                             ➔ <span className="theme-bold">Construire</span> avec les habitants des projets de rénovation du patrimoine
historique pour l’ouvrir à la culture, à la jeunesse et à l’événementiel

      
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

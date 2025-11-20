import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/mobiliteActive.jpg';

export default function MobiliteActive() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="mobilité active"
        />
        <div className="theme-hero-overlay">
          <h1>La mobilité active : bouger autrement, respirer mieux</h1>
        </div>
      </div>

      <div className="theme-content">
                                    <p>
                                    À Douai, la voiture reste au centre des mobilités, au détriment des piétons, des
cyclistes, des enfants et des personnes âgées. 
                                    <br></br><br></br>
                                  Trottoirs dégradés, pistes
dangereuses, ronds-points inadaptés : trop d’obstacles découragent celles et ceux
qui pourraient se passer de la voiture. Nous voulons booster les mobilités actives,
mieux relier les quartiers entre eux et sécuriser les trajets à pied et à vélo. Nous
ferons de Douai une ville plus respirable, accessible et accueillante.
                                    </p>
                                    <br></br>
                            
                            
                                    <h2 className="lfipurple">
                                      Nos mesures pour faire mieux
                                    </h2>
                            
                                    <ul className="theme-list">
                                      <li>
                                        ➔ <span className="theme-bold">Adopter</span> un plan pluriannuel ambitieux pour faciliter l’usage du vélo
                                      </li>
                                    <br></br>
                            
                                      <li>
                                        ➔ <span className="theme-bold">Créer</span> des voies cyclables séparées des voitures, notamment sur les trajets
maison-école
                                      </li>
                                    <br></br>
                                    
                                      <li>
                                        ➔ <span className="theme-bold">Sécuriser</span> les parcours cyclables en aménageant les ronds-points, les ponts
et en entretenant les marquages au sol régulièrement
                                      </li>
                                    <br></br>
                                    
                                      <li>
                                        ➔ <span className="theme-bold">Élargir</span> et végétaliser les trottoirs dans les rues étroites ou trop minérales

                                      </li>
                                    <br></br>
                                    
                                      <li>
                                        ➔ <span className="theme-bold">Transformer</span> les abords des écoles en “rues aux enfants” végétalisées et
dédiées à la mobilité active

                                      </li>
                                    <br></br>
                                    
                                      <li>
                                       ➔ <span className="theme-bold">Prêter</span> gratuitement un vélo à chaque collégien et lycéen, après une formation
à la circulation en ville <em className="lfipurple">(faisable dès la première année)</em>

                                      </li>
                                    <br></br>
                                    
                                      <li>
                                       ➔ <span className="theme-bold">Former</span> massivement à l’usage du vélo grâce à des éducateurs municipaux et
des partenariats avec les associations

                                      </li>
                                    <br></br>
                                      <li>
                                       ➔ <span className="theme-bold">Améliorer</span> la fréquence et la couverture des transports en commun pour
mieux desservir tous les quartiers

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

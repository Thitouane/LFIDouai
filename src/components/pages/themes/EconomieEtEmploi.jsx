import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/emploi.jpeg';

export default function EconomieEtEmploi() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="L’économie et l’emploi"
        />
        <div className="theme-hero-overlay">
          <h1>L’économie et l’emploi : répondre aux besoins des habitants</h1>
        </div>
      </div>

     <div className="theme-content">
                              <p>
                              À Douai, beaucoup trop de gens veulent travailler mais se heurtent à des
contrats de misère et à un manque cruel d’emplois de qualité.
                              <br></br><br></br>
                            Les petits
commerçants ferment les uns après les autres, pendant que les zones commerciales
et logistiques continuent de s’étendre. Cette politique économique ne profite ni aux
habitants, ni à la ville. Nous voulons rompre avec ce modèle et bâtir une économie
de proximité, populaire et utile : une économie qui crée des emplois dignes, soutient
les artisans et les commerçants, et redonne du sens au travail. Parce qu’un
commerce local ne vit bien que lorsque les habitants vivent bien.

                              </p>
                              <br></br>
                      
                      
                              <h2>
                                <span className="mesures-title">Nos mesures pour faire mieux</span>
                              </h2>
                      
                              <ul className="theme-list">
                                <li>
                                  ➔ <span className="theme-bold">Candidater</span> au dispositif national « Territoire Zéro Chômeur »
                                </li>
                              <br></br>
                      
                                <li>
                                  ➔ <span className="theme-bold">Créer</span> un espace pour les livreurs indépendants avec coin repos et atelier
mécanique vélo/scooter
                                </li>
                              <br></br>
                              
                                <li>
                                  ➔ <span className="theme-bold">Soutenir</span> l'installation de nouveaux commerces de proximité (boulangeries,
boucheries, primeurs, épiceries) par la mise à disposition de locaux et une
modulation de taxe foncière
                                </li>
                              <br></br>
                              
                                <li>
                                  ➔ <span className="theme-bold">Créer</span> un label “Commerces Douaisiens Engagés” pour valoriser les circuits
courts, les produits bio/paysans et l’implication citoyenne

                                </li>
                              <br></br>
                              
                                <li>
                                  ➔ <span className="theme-bold">Lancer</span> un festival annuel de la street food pour célébrer une gastronomie
populaire, accessible et conviviale
                                </li>
                              <br></br>
                              
                                <li>
                                 ➔ <span className="theme-bold">Mettre</span> fin au contrat avec JCDecaux pour libérer la ville des publicités des
marques de luxe, d’alcool et de malbouffe
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

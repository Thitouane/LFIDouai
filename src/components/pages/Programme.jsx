import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Programme.css";

import melenchon from '../../assets/logo-douaisis.png';

/**
 * Liste des thèmes — adapte titres, slugs, images et descriptions.
 * J'utilise des images placeholder; tu peux remplacer par des assets locaux:
 *  import img1 from '../assets/theme1.jpg' et remplacer image: img1
 */
export default function Programme() {
  const THEMES = [
    {
      title: "Antiracisme",
      slug: "antiracisme",
      image: "../../assets/logo-douaisis.png",
      excerpt: "Douai antiraciste, féministe et LGBTI : une ville fière de sa diversité, forte de ses différences",
    },
    {
      title: "Démocratie locale",
      slug: "democratie-locale",
      image: {melenchon},
      excerpt: "La démocratie locale : commencer la révolution citoyenne",
    },
    {
      title: "Écologie populaire",
      slug: "ecologie-populaire",
      image: {melenchon},
      excerpt: "L’écologie populaire : garantir notre avenir en commun",
    },
    {
      title: "Économie et emploi",
      slug: "economie-et-emploi",
      image: {melenchon},
      excerpt: "L’économie et l’emploi : répondre aux besoins des habitants",
    },
    {
      title: "Enfance et éducation",
      slug: "enfance-et-education",
      image: {melenchon},
      excerpt: "L’enfance et l’éducation : le meilleur pour les futures générations",
    },
    {
      title: "Engagement associatif",
      slug: "engagement-associatif",
      image: {melenchon},
      excerpt: "L’engagement associatif, sportif et culturel : le pilier d’un contre-pouvoir populaire",
    },
    {
      title: "Entraide et services publics",
      slug: "entraide-et-services-publiques",
      image: {melenchon},
      excerpt: "L’entraide et les services publics : mettre la solidarité au cœur de l’action municipale",
    },
    {
      title: "Logement",
      slug: "logement",
      image: {melenchon},
      excerpt: "Le logement : un droit collectif d’habiter de façon digne et durable",
    },
    {
      title: "Mobilité active",
      slug: "mobilite-active",
      image: {melenchon},
      excerpt: "La mobilité active : bouger autrement, respirer mieux",
    },
    {
      title: "Sûreté",
      slug: "surete",
      image: {melenchon},
      excerpt: "La sûreté : assurer le droit à la sûreté pour toutes et tous",
    },
  ];

  return (
    <section className="programme-page">
      <header className="programme-header">
        <h1 className="lfigreen">Le programme</h1>
        <p className="programme-intro">
          Découvrez nos grands thèmes et leurs propositions — cliquez sur une carte pour en savoir plus.
        </p>
      </header>

      <div className="themes-grid">
        {THEMES.map((t) => (
          <article className="theme-card" key={t.slug}>
            <Link to={`/programme/${t.slug}`} className="theme-link" aria-label={`Voir ${t.title}`}>
              <div className="theme-media">
                <img src={melenchon} alt={t.title} />
              </div>
              <div className="theme-body">
                <h2 className="theme-title">{t.title}</h2>
                <p className="theme-excerpt">{t.excerpt}</p>
                <span className="theme-cta">En savoir +</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
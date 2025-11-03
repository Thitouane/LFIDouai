import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Programme.css";

import mobiliteActive from '../../assets/mobiliteActive.jpg';
import logement from '../../assets/logement.jpg';
import surete from '../../assets/surete.jpg';
import servicePublique from '../../assets/servicePublique.jpg';
import asso from '../../assets/asso.jpg';
import ecole from '../../assets/ecole.jpg';
import emploi from '../../assets/emploi.jpeg';
import ecolo from '../../assets/ecolo.jpg';
import democratie from '../../assets/democratie.jpg';
import antiracisme from '../../assets/antiracisme.jpg';

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
      image: antiracisme,
      excerpt: "Douai antiraciste, féministe et LGBTI : une ville fière de sa diversité, forte de ses différences",
    },
    {
      title: "Démocratie locale",
      slug: "democratie-locale",
      image: democratie,
      excerpt: "La démocratie locale : commencer la révolution citoyenne",
    },
    {
      title: "Écologie populaire",
      slug: "ecologie-populaire",
      image: ecolo,
      excerpt: "L’écologie populaire : garantir notre avenir en commun",
    },
    {
      title: "Économie et emploi",
      slug: "economie-et-emploi",
      image: emploi,
      excerpt: "L’économie et l’emploi : répondre aux besoins des habitants",
    },
    {
      title: "Enfance et éducation",
      slug: "enfance-et-education",
      image: ecole,
      excerpt: "L’enfance et l’éducation : le meilleur pour les futures générations",
    },
    {
      title: "Engagement associatif",
      slug: "engagement-associatif",
      image: asso,
      excerpt: "L’engagement associatif, sportif et culturel : le pilier d’un contre-pouvoir populaire",
    },
    {
      title: "Entraide et services publics",
      slug: "entraide-et-services-publiques",
      image: servicePublique,
      excerpt: "L’entraide et les services publics : mettre la solidarité au cœur de l’action municipale",
    },
    {
      title: "Logement",
      slug: "logement",
      image: logement,
      excerpt: "Le logement : un droit collectif d’habiter de façon digne et durable",
    },
    {
      title: "Mobilité active",
      slug: "mobilite-active",
      image: mobiliteActive,
      excerpt: "La mobilité active : bouger autrement, respirer mieux",
    },
    {
      title: "Sûreté",
      slug: "surete",
      image: surete,
      excerpt: "La sûreté : assurer le droit à la sûreté pour toutes et tous",
    },
  ];

  return (
    <section className="programme-page">
      <header className="programme-header">
        <h1 className="lfigreen">Le programme</h1>
        <p className="programme-intro">
          Découvrez nos grands thèmes et leurs propositions.
        </p>
      </header>

      <div className="themes-grid">
        {THEMES.map((t) => (
          <article className="theme-card" key={t.slug}>
            <Link to={`/programme/${t.slug}`} className="theme-link" aria-label={`Voir ${t.title}`}>
              <div className="theme-media">
                <img src={t.image} alt={t.title} />
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
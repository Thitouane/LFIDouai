import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Programme.css";

import ToggleBlock from "../util/ToggleBlock.jsx"

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
import cadreDeVie from '../../assets/cadreDeVie.avif';

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
      excerpt: "Une ville fière de sa diversité, forte de ses différences",
    },
    {
      title: "Démocratie locale",
      slug: "democratie-locale",
      image: democratie,
      excerpt: "Commencer la révolution citoyenne",
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
    {
      title: "Le cadre de vie",
      slug: "cadre-de-vie",
      image: cadreDeVie,
      excerpt: "Pour des espaces agréables à vivre partout à Douai",
    }
  ];

  return (
    <section className="programme-page">
      <header className="programme-header">
        <h1> <span className="programme-title">Le programme</span> </h1>
        <ToggleBlock defaultOpen={true}>
          <p className="programme-intro">
            Frédéric Chéreau a laissé de côté les quartiers populaires de Douai, concentrant ses efforts sur le centre-ville.
<br></br><br></br>
            Autour de Patricia, nous portons une autre idée de la ville : vivante, solidaire et populaire, qui écoute ses habitants et leur redonne du pouvoir.
<br></br><br></br>
            Notre projet est simple mais fort : tout donner pour celles et ceux qui n’ont jamais rien.
<br></br><br></br>
            Notre objectif : faire de Douai la ville des quartiers vivants, où chacun peut vivre dignement et où le changement vient du peuple douaisien. 

        {/* 
          <span className="lfired">Frédéric Chéreau a tourné le dos aux quartiers populaires de Douai.</span> À force de concentrer ses efforts sur quelques rues du centre-ville, il a laissé tomber les
          habitants de Dorignies, de Frais-Marais, de la Clochette, de la résidence Gayant et des Faubourgs.<br></br><br></br>

          Face à ce constat, nous portons une autre idée de la ville : une ville vivante, solidaire et populaire. Une ville qui regarde, écoute et respecte ses quartiers. Une ville qui
          donne du pouvoir à ses habitants, qui protège, qui prend soin, qui partage.<br></br><br></br>
          
          <span className="lfired">Autour de Patricia, nous avons construit un projet écologique et humain</span>, fondé sur la
          justice sociale, la proximité et la dignité.<br></br><br></br>

          Ce programme répond à une idée simple mais forte : <span className="lfiyellow">il est grand temps de tout
          donner pour celles et ceux qui n’ont jamais rien.</span><br></br><br></br>

          <span className="lfired">Nous voulons rompre avec le modèle actuel du « tout pour le centre-ville ».</span> Au lieu
          d’investir toujours au même endroit, nous remettrons des moyens là où la ville a
          cessé d’en mettre : là où l’on ne met plus de lumières aux fêtes, où les transports
          passent le moins, où les rues tombent en ruine.<br></br><br></br>

          <span className="lfiyellow">Notre objectif est clair : faire de Douai la ville des quartiers vivants.</span> Une ville où
          chaque quartier compte, où l’on peut vivre dignement, travailler, se déplacer et se
          rencontrer. Parce que Douai mérite mieux et que le changement viendra du peuple
          douaisien lui-même.
        */}
          
        </p>
        </ToggleBlock>
        
      </header>

      <div className="grid">
        <div className="programme-intro">
          <h1 className="grid-title"> <span className="programme-title">En détail</span> </h1>
        </div>
        <div className="themes-grid">
          {THEMES.map((t) => (
            <article className="theme-card" key={t.slug}>
              <Link
                to={`/LFIDouai/programme/${t.slug}`}
                className="theme-link"
                aria-label={`Voir ${t.title}`}
                style={{ backgroundImage: `url(${t.image})` }}
              >
                <div className="theme-overlay"></div>

                <div className="theme-body">
                  <h2 className="theme-title">{t.title}</h2>
                  <p className="theme-excerpt">{t.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/*
      
      <div className="measure-header">
        <h2>Ctte mesure bkabkab</h2>
        <button className="cost-button">Combien ça coûte ?</button>
      </div>
      
      */}

      
      {/* 
       <div className="programme10">
          <h1> <span className="programme10-title">Dès la première année !</span> </h1>
          
        <div className="programme-intro">
          <p className="programme-10-header">
            Le changement ne peut pas attendre. Voici ce que nous allons faire dans les semaines et les mois à venir.
          </p>
          
          <ul className="programme-10-list">
            <li>
➔ <span className="programme10-odd">Nous permettons aux habitants de prendre la parole en conseil
municipal.</span>
            </li>
            <li>
➔ Nous donnons aux citoyens le droit de déclencher une votation
citoyenne si 1000 douaisiens le demandent.
            </li>
            <li>
➔ <span className="programme10-odd">Nous publions un tableau de bord citoyen en ligne avec indicateurs de
suivi des engagements du mandat</span> 
            </li>
            <li>
➔ Nous recrutons deux inspecteurs supplémentaires pour lutter contre les
marchands de sommeil.
            </li>
            <li>
➔ <span className="programme10-odd">Nous anonymisons toutes les demandes de logement social pour
garantir l’égalité de traitement.</span>
            </li>
            <li>
➔ Nous lançons l’inventaire des logements vides à réquisitionner pour
mettre à l’abri les personnes sans toit.
            </li>
            <li>
➔ <span className="programme10-odd">Nous distribuons gratuitement les fournitures scolaires à tous les élèves
des écoles maternelles et primaires dès la rentrée de septembre.</span>
            </li>
            <li>
➔ Nous lançons les études pour rénover les écoles les plus vétustes de la
cave au grenier.
            </li>
            <li >
➔ <span className="programme10-odd">Nous prêtons un vélo à chaque collégien et lycéen ayant suivi une
formation de sécurité routière à vélo.</span>
            </li>
            <li>
➔ Nous lançons des campagnes continues contre les violences sexistes,
racistes et LGBTI-phobes dans l’espace public.
            </li>
          </ul>
        </div>
      </div>
      */}
     
    </section>
  );
}
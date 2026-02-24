import React from "react";
import "../../styles/pages/Patricia.css";
import Liste from "../pages/Liste";

import melenchon from '../../assets/5931677052614413397.jpg';

import hugo from '../../assets/hugo.jpg';
import claudine from '../../assets/claudine.jpg';
import louise from '../../assets/louise.jpg';
import morgan from '../../assets/morgan.jpg';

export default function Patricia() {
  const candidates = [
    {
      name: "Louise Sobecki",
      age: 24,
      taf: "Opératrice en mutuelle santé",
      role: "De mon premier bisou à Binbin à l'obtention de mon baccalauréat au lycée Châtelet, Douai m'a vue m'épanouir. Aujourd'hui, je souhaite lui rendre ce qu'elle m'a donné en m'engageant pour la rendre plus attractive et plus ambitieuse vis-à-vis de sa jeunesse. Douai mérite de devenir une ville où l'on grandit et où l'on choisit de rester.",
      photo: louise,
    },
    {
      name: "Morgan Richard",
      age: 30,
      taf: "Préparateur en boulangerie",
      role: "Originaire du quartier des Asturies à Auby, mon parcours, marqué par des préjugés et des injures homophobes, a forgé ma détermination à lutter contre toute forme d'injustice. Aujourd'hui préparateur en boulangerie, je suis engagé pour l'égalité et la dignité de tous.",
      photo: morgan,
    },
    {
      name: "Hugo Barge",
      age: 25,
      taf: "Agent du logement social",
      role: "J’ai grandi à Râches et j'ai étudié au lycée Corot de Douai, ville de mes premiers engagements. Confronté très tôt aux discriminations et aux inégalités, je veux agir concrètement pour une ville plus juste et solidaire.",
      photo: hugo,
    },
    {
      name: "Claudine Auguste",
      age: 62,
      taf: "Retraitée de la fonction publique",
      role: "Douaisienne de naissance, j'ai exercé mes fonctions à la mairie de Douai au service des habitants. Engagée pour l'amélioration des conditions de travail des agents, je poursuis mon action avec détermination, guidée par des valeurs de justice et de solidarité.",
      photo: claudine,
    },
  ];

  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="surete"
        />
        <div className="theme-hero-overlay">
          <h1>Patricia Boulan</h1>
        </div>
      </div>

       <div className="theme-content">
          <p>
Née dans le quartier de la Brayelle, Patricia Boulan a grandi au Faubourg de Béthune, aux Blocs Millions. Aujourd’hui habitante du centre-ville, elle le dit sans détour : maintenant qu’elle y est, elle y reste et elle n’en partira pour rien au monde.
<br></br><br></br>
Femme du peuple, Patricia a travaillé dur toute sa vie. Caissière puis hôtesse d’accueil chez Mammouth, devenu Auchan Sin-le-Noble, elle s’y est engagée syndicalement pour défendre ses collègues. Elle a terminé sa carrière sur une plateforme téléphonique à Lens. De ces années de travail, elle a tiré une conviction simple : rien ne s’obtient sans lutte collective.
<br></br><br></br>
Mère de deux fils qu’elle a élevés quasiment seule, Patricia s’est aussi occupée de sa petite-fille depuis sa naissance, avec le même sens des responsabilités. Si vous êtes douaisien, il y a de grandes chances que vous ayez déjà croisé des membres de sa famille au Faubourg de Béthune, au Faubourg d'Esquerchin ou dans le centre-ville, à la cour des pompiers de la rue Saint-Nicolas.
<br></br><br></br>
Engagée à La France insoumise depuis sa création en 2016, Patricia y a trouvé ce qu’elle cherchait : une liberté d’action sans consignes venues d'en haut, où chacun agit selon ses disponibilités. Depuis 2018, elle est co-animatrice du groupe LFI de Douai aux côtés de Cyril Grandin, qui la décrit comme la colonne vertébrale du groupe.
<br></br><br></br>
Toujours présente dans les luttes, Patricia a manifesté aux côtés des Gilets jaunes, s'est faite gazer et brutaliser. Elle a été aux côtés des ATSEM de Douai, des agents de l’ASE mobilisés contre Christian Poiret. Elle est aussi un soutien constant du peuple palestinien.
<br></br><br></br>
Soutenue par les députés LFI Sophia Chikirou, Clémence Guetté, Aurélien Le Coq et Ugo Bernalicis qui saluent une battante rare dans le paysage politique, Patricia Boulan porte deux priorités claires : la rénovation complète des quartiers populaires abandonnés depuis 12 ans par Frédéric Chéreau et la création d’une brigade municipale du logement pour lutter contre les marchands de sommeil.
<br></br><br></br>
Son credo tient en quelques mots : tout donner pour celles et ceux qui n’ont jamais rien.
          </p>
       </div>
    
    <h1> <span className="agir-title">La liste</span> </h1>
      <Liste candidates={candidates} />
    </article>
  );
}

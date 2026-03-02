import React from "react";
import "../../styles/pages/Patricia.css";
import Liste from "../pages/Liste";
import CandidatListe from "../pages/CandidatListe";

import melenchon from '../../assets/5931677052614413397.jpg';
import hugo from '../../assets/hugo.jpg';
import claudine from '../../assets/claudine.jpg';
import louise from '../../assets/louise.jpg';
import morgan from '../../assets/morgan.jpg';
import malik from '../../assets/malik.png';
import alexandra from '../../assets/alexandra.png';
import paul from '../../assets/paul.png';
import sophie from '../../assets/sophie.png';
import yann from '../../assets/yann.png';
import charlotte from '../../assets/charlotte.png';


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
      name: "Claudine Auguste",
      age: 62,
      taf: "Retraitée de la fonction publique",
      role: "Douaisienne de naissance, j'ai exercé mes fonctions à la mairie de Douai au service des habitants. Engagée pour l'amélioration des conditions de travail des agents, je poursuis mon action avec détermination, guidée par des valeurs de justice et de solidarité.",
      photo: claudine,
    },
    {
      name: "Hugo Barge",
      age: 25,
      taf: "Agent du logement social",
      role: "J’ai grandi à Râches et j'ai étudié au lycée Corot de Douai, ville de mes premiers engagements. Confronté très tôt aux discriminations et aux inégalités, je veux agir concrètement pour une ville plus juste et solidaire.",
      photo: hugo,
    },
    {
      name: "Malik Salmi",
      age: 51,
      taf: "cadre industriel",
      role: "Né dans le Valenciennois, je suis revenu en France en 2018 après plusieurs années en entreprise à l'étranger. Marié et père de 2 enfants, je m'engage pour ma ville d'adoption, Douai, afin d'agir concrètement pour son avenir.",
      photo: malik,
    },
    {
      name: "Alexandra Lange",
      age: 46,
      taf: "employée maraîchère",
      role: "Née à Douai, profondément attachée à cette région, je m'y engage depuis des années. Militante féministe, je combats les injustices et les violences qui traversent notre société.",
      photo: alexandra,
    },
    {
      name: "Paul Deregnaucourt",
      age: 18,
      taf: "étudiant en prépa",
      role: "Né à Dechy, j'ai passé mes années lycée à Douai. Très tôt révolté par les injustices, je m'engage dans cette élection pour une société libre, équitable et solidaire.",
      photo: paul,
    },
    {
      name: "Sophie Debusschère",
      age: 42,
      taf: "assistante administrative",
      role: "Militante pour les droits humains et l'égalité, j'ai choisi de m'engager pour la ville qui m'a accueillie il y a 7 ans. Je veux faire de Douai une ville solidaire et agréable à vivre.",
      photo: sophie,
    },
    {
      name: "Yann Bogdan",
      age: 41,
      taf: "enseignant au collège Gayant",
      role: "Né en région parisienne, j'ai posé mes valises à Douai il y a 3 ans. Je m'engage pour faire de Douai une ville où Egalité et Fraternité ne sont pas des mots vides de sens.",
      photo: yann,
    },
    {
      name: "Charlotte Siebel",
      age: 43,
      taf: "Charlotte Siebel",
      role: "Douaisienne de naissance, profondément attachée à ma ville, je m'engage aux côtés de la France insoumise pour défendre une Douai libre, tolérante et solidaire, fidèle aux valeurs de justice et de dignité.",
      photo: charlotte,
    },
  ];

  const otherCandidates = [
    {
      name: "Lucas Dauphin",
      age: 22,
      taf: "Etudiant infirimier",
      role: "",
      photo: null,
    },
    {
      name: "Martine Derveaux Cherbuis",
      age: 70,
      taf: "professeure retraitée",
      role: "",
      photo: null,
    },
    {
      name: "Thitouane Helle",
      age: 26,
      taf: "ingenieur logiciel",
      role: "",
      photo: null,
    },
    {
      name: "Dominique Thevenet",
      age: 72,
      taf: "retraitée",
      role: "",
      photo: null,
    },
    {
      name: "Thomas Legras",
      age: 32,
      taf: "sans emploi",
      role: "",
      photo: null,
    },
    {
      name: "Taïna Bigot",
      age: 23,
      taf: "Employée de magasin",
      role: "",
      photo: null,
    },
    {
      name: "Bruno Tassart",
      age: 65,
      taf: "Agent SNCF retraité",
      role: "",
      photo: null,
    },
    {
      name: "Debora Caron",
      age: 33,
      taf: "Infirmière",
      role: "",
      photo: null,
    },
    {
      name: "Nicolas Nowicki",
      age: 62,
      taf: "Agent EDF retraité",
      role: "",
      photo: null,
    },
    {
      name: "Mariam Ezaoui",
      age: 50,
      taf: "Cheffe d'équipe contrôle qualité",
      role: "",
      photo: null,
    },
    {
      name: "Marc Auguste",
      age: 64,
      taf: "Contrôleur retraité",
      role: "",
      photo: null,
    },
    {
      name: "Julie-Marie Duhamel",
      age: 45,
      taf: "Ouvrière logistique",
      role: "",
      photo: null,
    },
    {
      name: "Jean-Pierre Walczak",
      age: 65,
      taf: "Ouvrier industriel retraité",
      role: "",
      photo: null,
    },
    {
      name: "Jocelyne Leleux",
      age: 62,
      taf: "Retraitée",
      role: "",
      photo: null,
    },
    {
      name: "Freddy Bancourt",
      age: 50,
      taf: "Responsable d'équipe",
      role: "",
      photo: null,
    },
    {
      name: "Leslie Lefebvre",
      age: 42,
      taf: "Auto-entrepreneuse",
      role: "",
      photo: null,
    },
    {
      name: "Victor Passé",
      age: 23,
      taf: "Étudiant à l'ENS",
      role: "",
      photo: null,
    },
    {
      name: "Etiennette Duhem",
      age: 60,
      taf: "Agente administrative",
      role: "",
      photo: null,
    },
    {
      name: "Emir Cerimovic",
      age: 42,
      taf: "Graphiste game designer",
      role: "",
      photo: null,
    },
    {
      name: "Lou-Anne Redon",
      age: 33,
      taf: "Professeure de maths",
      role: "",
      photo: null,
    },
    {
      name: "Kevin Heringhuel",
      age: 27,
      taf: "Chauffeur-livreur",
      role: "",
      photo: null,
    },
    {
      name: "Sylvie Bienaime",
      age: 69,
      taf: "Professeure retraitée",
      role: "",
      photo: null,
    },
    {
      name: "Habib Latreche",
      age: 48,
      taf: "Agent logistique",
      role: "",
      photo: null,
    },
    {
      name: "Alicia Carton",
      age: 27,
      taf: "Assistante comptable",
      role: "",
      photo: null,
    },
    {
      name: "Nadji Ben Youcef",
      age: 23,
      taf: "Sans emploi",
      role: "",
      photo: null,
    },
    {
      name: "Fatima Bekhti",
      age: 54,
      taf: "Professeure des écoles",
      role: "",
      photo: null,
    },
    {
      name: "Charles-Henri Hernu",
      age: 40,
      taf: "Psychiatre",
      role: "",
      photo: null,
    },
    {
      name: "Laurie Pinon",
      age: 31,
      taf: "Professeure des écoles",
      role: "",
      photo: null,
    },
    {
      name: "Allan Lefebvre",
      age: 38,
      taf: "Auto-entrepreneur",
      role: "",
      photo: null,
    },
    {
      name: "Florence Fievet",
      age: 53,
      taf: "Assistante comptable",
      role: "",
      photo: null,
    },
    {
      name: "Mohamed Touenti",
      age: 48,
      taf: "Commercial",
      role: "",
      photo: null,
    },
    {
      name: "Ariana Welle",
      age: 35,
      taf: "Professeure de lettres",
      role: "",
      photo: null,
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
      <CandidatListe candidates={otherCandidates} />
    </article>
  );
}

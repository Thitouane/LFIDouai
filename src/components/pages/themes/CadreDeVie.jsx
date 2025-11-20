import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/melenchon.jpg';

export default function CadreDeVie() {
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
          
Pendant 12 ans, Frédéric Chéreau a fermé les yeux sur les trois quarts de la ville, se concentrant sur les rues du centre-ville avec les résultats que l'on connait. Nous voulons rattraper ce retard et offrir à tous les habitants un cadre de vie rénové, sûr et agréable. Parce que la beauté n’est pas un privilège, c’est un droit. Douai mérite des rues, places et quartiers agréables partout, pour tous.


Nos projets par quartier :

Quartier de Dorignies :

Réfections des résidences et rues principales (Château Delattre, Dr Charcot, Trannois, Jean Jaurès) – 4,5 M€

Requalification de la Place de la Batellerie (0,8 ha) – 1,5 M€

Requalification du Quai du Boisset – 900 000 €


Quartier de Frais-Marais :

Réfection de la cité de la Ferronnière – 4,5 M€

Refaire la route de la Solitude jusqu’à la route de Tournai (via collège Gayant) – 500 000 €

Requalification de la Place de Meaux (0,5 ha) – 1 M€

Construction d’une salle de remise en forme municipale – 900 000 €

Réfection de la résidence Norevie et rues avoisinantes – 900 000 €


Faubourgs de Béthune et d’Esquerchin :

Réfection du Polygone – 2 M€

Nouveau parc public du Polygone (friche rue Rhin et Danube) – 1 M€

Requalification du Quai des Fontainettes – 900 000 €

Réfection de La Roseraie – 1,5 M€

Réfection de La Brayelle – 1,5 M€


Centre-ville :

Réfection de l’avenue Georges Clémenceau – 300 000 €

Aide au ravalement des façades (rues Saint-Jacques, de la Madeleine et de Bellain) – 500 000 €
        </p>

        <Link to="/LFIDouai/programme" className="back-button">
          ← Retour au programme
        </Link>
      </div>
    </article>
  );
}

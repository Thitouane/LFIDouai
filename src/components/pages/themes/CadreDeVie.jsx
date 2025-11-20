import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/cadreDeVie.avif';

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
        Pendant 12 ans, Frédéric Chéreau a fermé les yeux sur les trois quarts de la ville, se concentrant sur les rues du centre-ville avec les résultats que l'on connait. 

        <br></br><br></br>
      Nous voulons rattraper ce retard et offrir à tous les habitants un cadre de vie rénové, sûr et agréable. Parce que la beauté n’est pas un privilège, c’est un droit. Douai mérite des rues, places et quartiers agréables partout, pour tous.
        </p>
        <br></br>


        <h2 className="lfipurple">
          Nos projets par quartier :
        </h2>

        <h3 className="lfigreen">
        Quartier de Dorignies :
        </h3>
                    
        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Réfections</span> des résidences et rues principales (Château Delattre, Dr Charcot, Trannois, Jean Jaurès) – 4,5 M€
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Requalification</span> de la Place de la Batellerie (0,8 ha) – 1,5 M€
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Requalification</span> du Quai du Boisset – 900 000 €  
          </li>
        <br></br>
        
        </ul>
        <br></br>

        <h3 className="lfigreen">
        Quartier de Frais-Marais :
        </h3>
                    
        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Réfection</span> de la cité de la Ferronnière – 4,5 M€
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Refaire</span> la route de la Solitude jusqu’à la route de Tournai (via collège Gayant) – 500 000 €
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Requalification</span> de la Place de Meaux (0,5 ha) – 1 M€
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Construction</span> d’une salle de remise en forme municipale – 900 000 €
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Réfection</span> de la résidence Norevie et rues avoisinantes – 900 000 €
          </li>
        <br></br>

        </ul>
        <br></br>

        <h3 className="lfigreen">
        Faubourgs de Béthune et d’Esquerchin :
        </h3>
                    
        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Réfection</span> du Polygone – 2 M€
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Nouveau</span> parc public du Polygone (friche rue Rhin et Danube) – 1 M€
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Requalification</span> du Quai des Fontainettes – 900 000 €
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Réfection</span> de La Roseraie – 1,5 M€
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Réfection</span> de La Brayelle – 1,5 M€
          </li>
        <br></br>

        </ul>
        <br></br>

        <h3 className="lfigreen">
        Centre-ville :
        </h3>
                    
        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Réfection</span> de l’avenue Georges Clémenceau – 300 000 €
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Aide</span> au ravalement des façades (rues Saint-Jacques, de la Madeleine et de Bellain) – 500 000 €
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

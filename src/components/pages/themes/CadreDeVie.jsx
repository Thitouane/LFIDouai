import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import { useNavigate } from "react-router-dom";
import melenchon from '../../../assets/cadreDeVie.avif';

export default function CadreDeVie() {
  const navigate = useNavigate();

  const goToAgir = () => {
    navigate("../LFIDouai/agir");
  };

  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="surete"
        />
        <div className="theme-hero-overlay">
          <h1>Le cadre de vie : Pour des espaces agréables à vivre partout à Douai</h1>
        </div>
      </div>

      <div className="theme-content">
        <p>
        Pendant 12 ans, Frédéric Chéreau a fermé les yeux sur les trois quarts de la ville, se concentrant sur les rues du centre-ville avec les résultats que l'on connait. 

        <br></br><br></br>
      Nous voulons rattraper ce retard et offrir à tous les habitants un cadre de vie rénové, sûr et agréable. Parce que la beauté n’est pas un privilège, c’est un droit. Douai mérite des rues, places et quartiers agréables partout, pour tous.
        </p>
        <br></br>

        <div className="button-wrapper">
          <button className="lfibutton" onClick={() => goToAgir()}> Contribuer au programme en indiquant les rues à refaire </button>
        </div>
        
        <h2>
          <span className="mesures-title">Nos projets par quartier :</span>
        </h2>

        <h3 className="lfigreen">
        Quartier de Dorignies :
        </h3>
                    
        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Réfections</span> des résidences et rues principales (Jean Jaurès, Château Delattre, Trannois, Dr Charcot)
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Requalification</span> de la Place de la Batellerie
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Requalification</span> du Quai du Boisset
          </li>
        <br></br>
        
        </ul>
        <br></br>

        <h3 className="lfigreen">
        Quartier de Frais-Marais :
        </h3>
                    
        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Réfection</span> de la cité de la Ferronnière
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Refaire</span> a route de la Solitude jusqu’à la route de Tournai (via collège Gayant)
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Requalification</span> de la Place de Meaux
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Construction</span> d’une salle de remise en forme municipale
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Réfection</span> des rues de la Chapelle et des Peupliers
          </li>
        <br></br>

        </ul>
        <br></br>

        <h3 className="lfigreen">
        Faubourgs de Béthune et d’Esquerchin :
        </h3>
                    
        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Réfection</span> des rues du Polygone
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Création</span> d'un nouveau parc public, le Parc du Polygone sur la friche de la rue Rhin et Danube à côté des ateliers 
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Rénovation</span> du Quai des Fontainettes
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Réfection</span> de La Roseraie
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Réfection</span> de La Brayelle
          </li>
        <br></br>

        </ul>
        <br></br>

        <h3 className="lfigreen">
        Centre-ville :
        </h3>
                    
        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Réfection</span> de l’avenue Georges Clémenceau
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Grand plan d'aide</span> au ravalement des façades de la rue Saint-Jacques, de la rue de la Madeleine et de la rue de Bellain
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

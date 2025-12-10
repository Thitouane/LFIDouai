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
          <span className="mesures-title">Nos mesures pour faire mieux</span>
        </h2>

        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">« Douai Partout »</span> : notre plan pour n'oublier aucun habitant
        <br></br>
Un programme pluriannuel sera lancé pour refaire les rues, trottoirs et places de tous les quartiers. Cette politique visera en priorité les zones les plus délaissées.
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Transformer</span> les lieux de vie
        <br></br>
        Nous réaménagerons les places, parcs, quais, friches et zones dégradées pour en faire des espaces plus conviviaux.
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Améliorer</span> l'image du centre-ville
          <br></br>
            Nous participerons financièrement au ravalement des façades des rues du centre-ville afin de redorer l'image du cœur de ville.
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Une méthode</span> : co-construction et équité
          <br></br>
            Aucun quartier ne sera oublié. Chaque projet sera discuté localement avec les habitants, les associations et les acteurs de terrain.
La répartition des investissements se fera selon un principe clair : réduire les inégalités historiques et améliorer d’abord là où les besoins sont les plus importants.
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

import "../../styles/pages/Agir.css";
import group from '../../assets/lfi-group.webp';

export default function Agir() {
  
  const handleActionClick = () => {
    window.open('https://actionpopulaire.fr/groupes/16a9d6ad-c990-457c-b5e0-81393a93a902/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="rejoindre-setion">
      <div className="agir-image">
        <img src={group} alt="Agir" className="image-style" />
      </div>
      <div className="agir-content">
        <h1> 
          <span className="agir-title">Agir</span>
        </h1>
        <h2>ENSEMBLE POUR FAIRE MIEUX À DOUAI</h2>
        <p>Rejoignez notre groupe d'action !</p>
        <button className="cta-btn" onClick={handleActionClick}>Nous rejoindre</button>
      </div>
      
      {location.pathname === "/agir" && (
        <div className="ma-div-speciale">
        </div>
      )}
    </section>
  );
}

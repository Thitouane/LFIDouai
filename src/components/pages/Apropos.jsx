import "../../styles/pages/Apropos.css";
import beffroi from '../../assets/beffroi.jpg';

export default function Apropos() {
  return (
    <section className="apropos-section">
      <h1>
        <span className="apropos-title"> Pourquoi notre liste ? </span>
      </h1>
      
      <div className="content-apropos">
        <div className="apropos-block">
          <p>
            Nous avons fait le choix de <span className="bold">reprendre notre avenir en main</span>, loin des notables qui se succèdent depuis des années ici et ailleurs.
            Loin des Chéreau, des Guiffard et des Poiret.
          <br></br><br></br><br></br>
            Autour de <span className="lfired">Patricia</span>, une équipe de citoyennes et de citoyens engagés s’est réunie pour construire un projet populaire, écologique et solidaire.
          <br></br><br></br><br></br>
            Nous voulons <span className="lfiyellow">remettre l’humain au centre des décisions</span> et rendre Douai plus juste, plus démocratique et plus vivable.
          <br></br><br></br><br></br>
            <span className="bold">Nous croyons à une autre manière de faire de la politique</span> : en partant du terrain, en écoutant les habitantes et les habitants, en agissant avec elles et eux.
          <br></br><br></br><br></br>
            Nous habitons tous les quartiers de Douai.
            Ce qui nous unit, c’est la conviction que <span className="bold">Douai mérite mieux — et que le changement doit venir du peuple douaisien lui-même.</span>
          </p>
        </div>
        
        <img src={beffroi} alt="Beffroi de Douai" className="beffroi" />
      </div>
    </section>
  );
}

import "../../styles/pages/Apropos.css";
import beffroi from '../../assets/beffroi.jpg';
import signature from '../../assets/signature-removebg.png';
import Agir from "../pages/Agir";

export default function Apropos() {
  return (
    <section className="apropos-section">
      {/*<h1>
        <span className="apropos-title"> Pourquoi notre liste ? </span>
      </h1>
      */}
      <div className="content-apropos">
        <div className="apropos-block">
          <p>
            J'ai fait le choix de me présenter pour reprendre notre avenir en main, loin de la petite bourgeoisie douaisienne, loin des Chéreau et des Poiret.
            <br></br><br></br><br></br>
            Autour de moi, des citoyens s'engagent pour porter un projet populaire, écologique et solidaire.
            <br></br><br></br><br></br>
            Nous voulons remettre l’humain au centre des décisions. Nous voulons rendre Douai plus juste, plus démocratique et plus vivable.
            <br></br><br></br><br></br>
            Douai mérite mieux. Rejoignez-nous !<br></br>
            <img src={signature} alt="signature" className="signature" />
          </p>
          {/*
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
            Ce qui nous unit, c’est la conviction que <span className="bold">Douai mérite mieux</span> — et que le changement doit venir du peuple douaisien lui-même.
          </p>
          */}
          
        </div>
        {/*<img src={beffroi} alt="Beffroi de Douai" className="beffroi" />*/}
      </div>

      {location.pathname === "/LFIDouai/apropos" && (
        <Agir className="agir-apropos"/>
      )}

    </section>
  );
}

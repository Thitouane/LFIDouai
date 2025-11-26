import { useState } from "react";
import emailjs from "emailjs-com";
import "../../styles/pages/Agir.css";
import group from '../../assets/lfi-group.webp';

export default function Agir() {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jen545s", // 🔥 ton Service ID
      "template_nqq8knt", // 🔥 ton Template ID
      e.target,
      "bFDNXFJIWBO4BmMAB" // 🔥 ta Public Key
    )
    .then(() => {
      setSent(true);
    })
    .catch(err => {
      console.error("Erreur EmailJS :", err);
      alert("Erreur lors de l'envoi.");
    });
  };
  
  const handleActionClick = () => {
    window.open('https://actionpopulaire.fr/groupes/16a9d6ad-c990-457c-b5e0-81393a93a902/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section >
      <div className={`${location.pathname === "/LFIDouai/agir" ? "form-section-b" : "form-section"}`}>
        <h2 style={{textAlign:"center", marginBottom:"3rem"}}>
          <span className="agir-title"> Restons en contact</span>
        </h2>

        {!sent ? (
          <form onSubmit={sendEmail} className="form" >
            <div>
              <label>Prénom</label>
              <input name="prenom" type="text" required placeholder="Prénom"
              style={{width:"100%",padding:"12px",borderRadius:"6px",border:"1px solid #ccc"}} />
            </div>
            <div>
              <label>Nom</label>
              <input required name="nom" type="text" placeholder="Nom"
                style={{width:"100%",padding:"12px",borderRadius:"6px",border:"1px solid #ccc"}}
              />
            </div>
            <div>
              <label>Email</label>
              <input required name="email" type="email" placeholder="Email"
                style={{width:"100%",padding:"12px",borderRadius:"6px",border:"1px solid #ccc"}}
              />
            </div>
            <div>
              <label>Téléphone</label>
              <input name="téléphone" type="tel" placeholder="Téléphone"
                style={{width:"100%",padding:"12px",borderRadius:"6px",border:"1px solid #ccc"}}
              />
            </div>
            <div>
              <label>Ville</label>
              <input required name="ville" type="text" placeholder="Ville"
                style={{width:"100%",padding:"12px",borderRadius:"6px",border:"1px solid #ccc"}}
              />
            </div>
            <div>
              <label>Souhait :</label>
              <select name="souhait" required style={{width:"100%",padding:"12px",borderRadius:"6px",border:"1px solid #ccc"}}>
                <option value="Actualités">Être tenu au courant</option>
                <option value="Militant">Militer</option>
                <option value="Financement">Contribuer financièrement</option>
                <option value="Programme">Construire le programme</option>
              </select>
            </div>
            <div>
              <label>Message (optionnel)</label>
              <textarea name="message" rows="4"
                style={{width:"100%",padding:"12px",borderRadius:"6px",border:"1px solid #ccc"}}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="cta-btn"
            >
              Envoyer
            </button>
          </form>
        ) : (
          <h3 style={{textAlign:"center",}}>
            Merci ! Votre message nous a été envoyé avec succès.  
          </h3>
        )}
      </div>
      
      {location.pathname === "/LFIDouai/agir" && (
        <div className="rejoindre-setion">
          <div className="agir-image">
            <img src={group} alt="Agir" className="image-style" />
          </div>
          <div className="agir-content">
            <h1> 
              <span className="agir-title">Agir</span>
            </h1>
            <h2>ENSEMBLE POUR FAIRE MIEUX À DOUAI</h2>
            <p style={{marginBottom:"1rem"}}>Rejoignez notre groupe d'action !</p>
            <button className="cta-btn" onClick={handleActionClick}>Nous rejoindre</button>
          </div>
        </div>
      )}
    </section>
  );
}

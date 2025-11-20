import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Programme.css";
import melenchon from '../../../assets/ecole.jpg';

export default function EnfanceEtEducation() {
  return (
    <article className="theme-page">
      <div className="theme-hero">
        <img
          src={melenchon}
          alt="L’enfance et l’éducation"
        />
        <div className="theme-hero-overlay">
          <h1>L’enfance et l’éducation : le meilleur pour les futures générations</h1>
        </div>
      </div>

      <div className="theme-content">
        <p>
          Tous les enfants ne grandissent pas dans les mêmes conditions. Tous ne
bénéficient pas des mêmes moyens au moment de remplir sa trousse et son
cartable. Beaucoup d’écoles douaisiennes sont vétustes et mal isolées et
beaucoup manquent d’<span className="theme-bold">ATSEM</span>.   
        <br></br><br></br>
          Pourtant, l’école est censée être le lieu de l’égalité.
La ville peut faire beaucoup pour garantir de bonnes conditions d’accueil, alléger le
coût de la scolarité pour les familles et renforcer les moyens humains auprès des
plus petits. En investissant dans l’enfance, nous préparons un avenir plus juste.
        </p>
        <br></br>


        <h2 className="lfipurple">
          Nos mesures pour faire mieux
        </h2>

        <ul className="theme-list">
          <li>
            ➔ <span className="theme-bold">Fournir</span> à tous les élèves des fournitures scolaires gratuites dès la maternelle 
<em className="lfipurple"> (faisable dès la première année)</em>
          </li>
        <br></br>

          <li>
            ➔ <span className="theme-bold">Distribuer</span> gratuitement un petit-déjeuner à chaque écolier, chaque jour
d’école pour que personne ne commence la journée le ventre vide

          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Rénover</span> les écoles publiques et les crèches
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Végétaliser</span> les cours de récréation
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Recruter</span> une ATSEM par classe dans toutes les écoles maternelles
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Subventionner</span> les séjours scolaires qui favorisent les liens avec les villes
jumelées ou privilégient des alternatives écologiques aux transports
traditionnels
          </li>
        <br></br>
        
          <li>
            ➔ <span className="theme-bold">Adhérer</span> au réseau national UNICEF « Ville amie des enfants » pour
renforcer les droits des plus jeunes <em className="lfipurple">(faisable dès la première année)</em>
          </li>
        <br></br>
        
        </ul>
        <br></br>


        
        <h2 className="lfigreen">
          Chiffrage
        </h2>
        <p> 
          👶 <span className="theme-bold">1 ATSEM par classe de maternelle </span>— 1,8 million d’euros
          <br></br>
          Moins d’une classe de maternelle sur deux dispose aujourd’hui d’une ATSEM. Nous recruterons pour assurer une présence dans toutes les classes, comme le recommande l'Éducation nationale.
          <br></br><br></br>
          <span className="theme-bold">Les ATSEM, c’est quoi ?</span> Ce sont ces professionnelles de la petite enfance qui assistent les maîtresses et veillent au bien-être des enfants.
          <br></br><br></br>
          <span className="theme-bold">Pourquoi ?</span> Parce qu'il s'agit là d'une mesure indispensable pour mieux accompagner les enfants dans leurs premières années à l’école.
          <br></br><br></br>
          <span className="theme-bold lfigreen">Détails :</span>
          <br></br>
          Recrutement progressif sur 6 ans
          <br></br>
          Coût : environ 500 000 € par an à plein effectif en 2032
          <br></br>
        </p>        

        <br></br>
        <div style={{
          width: "50%",
          height: "2px",
          background: `linear-gradient(
            to right,
            transparent,
            black,
            transparent
        )`,
          borderRadius: "999px",
          margin: "16px auto"
        }}></div>
        <br></br>
        
        <p>
          🥐 <span className="theme-bold">Petit-déjeuner gratuit à l’école </span>— 1,4 million d’euros
          <br></br>
Tous les enfants des écoles publiques de Douai auront accès à un petit-déjeuner équilibré et gratuit chaque matin.
Un geste simple pour lutter contre la faim, réduire les inégalités et favoriser la concentration et le bien-être de tous.
          <br></br><br></br>
Phases de mise en place :
          <br></br>

- Test dans les écoles REP+ dès 2027<br></br>
- Extension aux REP en 2028<br></br>
- Généralisation à toutes les écoles, sous réserve que l’État maintienne son financement aux communes<br></br>

        </p>
        
      <br></br><br></br>

        <Link to="/LFIDouai/programme" className="back-button">
          ← Retour au programme
        </Link>
      </div>
    </article>
  );
}

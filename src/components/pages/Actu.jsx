import "../../styles/pages/Actu.css";
import { Link } from "react-router-dom";

import insoumission01 from '../../assets/insoumission01.jpg';
import observateur01 from '../../assets/observateur01.webp';
import vdn01 from '../../assets/vdn01.jpeg';

export default function Actu() {

  const articles = [
  {
    id: "observateur-01",
    title: "Politique/municipales : les députés LFI viennent soutenir leur candidate à Douai",
    date: "2025-11-19",
    link: "https://www.lobservateur.fr/douai-la-france-insoumise-deputes-boulan/",
    image: observateur01,
    excerpt: "Notre programme pour redonner des moyens à l’école publique."
  },
  {
    id: "insoumission-01",
    title: "Municipales à Douai : une vague d’espoir déferle avec Patricia Boulan",
    date: "2025-12-02",
    link: "https://linsoumission.fr/2025/12/02/municipales-douai-boulan/",
    image: insoumission01,
    excerpt: "Le lancement de campagne municipale de l’insoumise Patricia Boulan ce vendredi 28 novembre aux Salles d’Anchin a rassemblé près de 100 personnes"
  },
  {
    id: "vdn-01",
    title: "Patricia Boulan, tête de liste de La France insoumise à Douai, cogne fort sur le maire sortant",
    date: "2025-12-02",
    link: "https://www.lavoixdunord.fr/1652263/article/2025-12-02/patricia-boulan-tete-de-liste-de-la-france-insoumise-douai-cogne-fort-sur-le",
    image: vdn01,
    excerpt: "Tête de liste aux prochaines municipales, Patricia Boulan, est venue présenter les grandes lignes du programme de La France insoumise à Douai, vendredi soir, salles d’Anchin, devant près d’une centaine de militants. Elle n’a pas manqué d’égratigner au passage le maire socialiste Frédéric Chéreau."
  },
 
];
   
  return (
    <section className="articles-page">
      <h1><span className="articles-title">Actualités</span></h1>

      <div className="articles-grid">
        {articles.map(article => (
            <Link to={`${article.link}`} className="article-card">

              {/* Image + date superposée */}
              <div 
                className="article-card-image"
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div className="article-date-tag">
                  {new Date(article.date).toLocaleDateString("fr-FR")}
                </div>
              </div>

              {/* Titre + excerpt */}
              <div className="article-card-body">
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-excerpt">{article.excerpt}</p>
              </div>

            </Link>
        ))}
      </div>
    </section>
  );
}

import "../../styles/pages/Actu.css";
import { Link } from "react-router-dom";

import insoumission01 from '../../assets/insoumission01.jpg';
import observateur02 from '../../assets/observateur02.jpg';
import vdn01 from '../../assets/vdn01.jpeg';

export default function Actu() {

  const articles = [
    {
    id: "insoumission-01",
    title: "Municipales à Douai : une vague d’espoir déferle avec Patricia Boulan",
    date: "2025-12-02",
    journal: "L'insoumission",
    link: "https://linsoumission.fr/2025/12/02/municipales-douai-boulan/",
    image: insoumission01,
    excerpt: "Le lancement de campagne municipale de l’insoumise Patricia Boulan ce vendredi 28 novembre aux Salles d’Anchin a rassemblé près de 100 personnes"
  },
  {
    id: "vdn-01",
    title: "Patricia Boulan, tête de liste de La France insoumise à Douai, cogne fort sur le maire sortant",
    date: "2025-12-02",
    journal: "La Voix du Nord",
    link: "https://www.lavoixdunord.fr/1652263/article/2025-12-02/patricia-boulan-tete-de-liste-de-la-france-insoumise-douai-cogne-fort-sur-le",
    image: vdn01,
    excerpt: "Tête de liste aux prochaines municipales, Patricia Boulan, est venue présenter les grandes lignes du programme de La France insoumise à Douai, vendredi soir, salles d’Anchin, devant près d’une centaine de militants. Elle n’a pas manqué d’égratigner au passage le maire socialiste Frédéric Chéreau."
  },
  {
    id: "observateur-02",
    title: "Politique – Douai : l’insoumise Patricia Boulan lance sa campagne devant près de 100 personnes",
    date: "2025-12-01",
    journal: "L'observateur",
    link: "https://www.lobservateur.fr/patricia-boulan-la-france-insoumise-douai/",
    image: observateur02,
    excerpt: "La campagne municipale des Insoumis de Douai a été lancée ce vendredi 28 novembre aux Salles d'Anchin devant une centaine de personnes. Il s'agissait de la première grande réunion publique de la liste portée par Patricia Boulan. 2 députés étaient présents pour la soutenir. La formation politique se présente pour la première fois sous ses propres couleurs dans la cité des géants."
  },
  {
    id: "observateur-03",
    title: "Politique – Douai : Patricia Boulan, « la voix du peuple », sera la tête de liste LFI aux municipales",
    date: "2025-10-05",
    journal: "L'observateur",
    link: "https://www.lobservateur.fr/patricia-boulan-lfi-douai-municipales/",
    image: observateur02,
    excerpt: "Ce dimanche, Ugo Bernalicis, député de la métropole lilloise, était l'invité du stand La France Insoumise (LFI) sur la braderie d'automne à Douai pour le dévoilement de la tête de liste du parti lors des municipales dans la cité des géants"
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
                  {new Date(article.date).toLocaleDateString("fr-FR")} : {article.journal}
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

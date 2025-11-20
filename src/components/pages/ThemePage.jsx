import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/Programme.css";
import Antiracisme from "./themes/Antiracisme";
import DemocratieLocale from "./themes/DemocratieLocale";
import EcologiePopulaire from "./themes/EcologiePopulaire";
import EconomieEtEmploi from "./themes/EconomieEtEmploi";
import EnfanceEtEducation from "./themes/EnfanceEtEducation";
import EngagementAssociatif from "./themes/EngagementAssociatif";
import EntraideEtServicesPubliques from "./themes/EntraideEtServicesPubliques";
import Logement from "./themes/Logement";
import MobiliteActive from "./themes/MobiliteActive";
import Surete from "./themes/Surete";
import CadreDeVie from "./themes/CadreDeVie";

/* Même source de données (tu peux extraire ça dans un fichier commun si tu veux) */

export default function ThemePage() {
  const { theme } = useParams();
  
  const pages = {
    antiracisme: <Antiracisme />,
    "democratie-locale": <DemocratieLocale />,
    "ecologie-populaire": <EcologiePopulaire />,
    "economie-et-emploi": <EconomieEtEmploi />,
    "enfance-et-education": <EnfanceEtEducation />,
    "engagement-associatif": <EngagementAssociatif />,
    "entraide-et-services-publiques": <EntraideEtServicesPubliques />,
    logement: <Logement />,
    "mobilite-active": <MobiliteActive />,
    surete: <Surete />,
    "cadre-de-vie": <CadreDeVie />,
  };
  const SelectedPage = pages[theme];

  if (!SelectedPage) {
    return (
      <section className="theme-notfound">
        <h2>Thème introuvable</h2>
        <p>Le thème demandé n'existe pas.</p>
        <a href="/LFIDouai/programme" className="back-button">
          ← Retour au programme
        </a>
      </section>
    );
  }

  return <>{SelectedPage}</>;
}

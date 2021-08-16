import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class Accueil_Paris_Haute_Normandie extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil Paris Haute-Normandie Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/paris_haute-normandie"}
        />
        <Header />
        <Footer regions={true} />
        <div className="divRegions">
          <div className="liste">
            <h1 className="titleRegion">Ile-de-France et Haute-Normandie</h1>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/auteuil" className="hippo hippo_auteuil">
                  <span>Auteuil</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link
                  to="/bacqueville_en_caux"
                  className="hippo hippo_bacqueville"
                >
                  <span>Bacqueville-en-Caux</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/bernay" className="hippo hippo_bernay">
                  <span>Bernay</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/bihorel" className="hippo hippo_bihorel">
                  <span>Bihorel</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/chantilly" className="hippo hippo_chantilly">
                  <span>Chantilly</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/chartres" className="hippo hippo_chartres">
                  <span>Chartres</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/compiegne" className="hippo hippo_compiegne">
                  <span>Compiègne</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/dieppe" className="hippo hippo_dieppe">
                  <span>Dieppe</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/enghien" className="hippo hippo_enghien">
                  <span>Enghien</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/evreux" className="hippo hippo_evreux">
                  <span>Evreux</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/francheville" className="hippo hippo_francheville">
                  <span>Francheville</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/fontainebleau" className="hippo hippo_fontainebleau">
                  <span>Fontainebleau</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/gournay" className="hippo hippo_gournay">
                  <span>Gournay en Bray</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/la_ferte-vidame" className="hippo hippo_la_ferte">
                  <span>La Ferté-Vidame</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/le_neubourg" className="hippo hippo_le_neubourg">
                  <span>Le Neubourg</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/les_andelys" className="hippo hippo_les_andelys">
                  <span>Les Andelys</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/longchamp" className="hippo hippo_longchamp">
                  <span>Longchamp</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/maisons_laffitte" className="hippo hippo_maisons">
                  <span>Maisons-Laffitte</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/mauquenchy" className="hippo hippo_mauquenchy">
                  <span>Mauquenchy</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/rambouillet" className="hippo hippo_rambouillet">
                  <span>Rambouillet</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/saint_aubin" className="hippo hippo_saint_aubin">
                  <span>Saint-Aubin-lès-Elbeuf</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/saint-cloud" className="hippo hippo_saint-cloud">
                  <span>Saint-Cloud</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/vincennes" className="hippo hippo_vincennes">
                  <span>Vincennes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil_Paris_Haute_Normandie;

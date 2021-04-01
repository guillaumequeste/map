import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class Accueil_Nord extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil Nord Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/nord"}
        />
        <Header />
        <Footer regions={true} />
        <div className="divRegions">
          <div className="liste">
           <h1 className="titleRegion">Nord</h1>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/abbeville" className="hippo hippo_abbeville">
                  <span>Abbeville</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/amiens" className="hippo hippo_amiens">
                  <span>Amiens</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/arras" className="hippo hippo_arras">
                  <span>Arras</span>
                </Link>
              </div>
              <div className="caseRegion">
              <Link to="/la_capelle" className="hippo hippo_la_capelle">
                  <span>La Capelle</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/le_croise" className="hippo hippo_le_croise">
                  <span>Le Croisé-Laroche</span>
                </Link>
              </div>
              <div className="caseRegion">
              <Link to="/le_touquet" className="hippo hippo_le_touquet">
                  <span>Le Touquet</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/saint-omer" className="hippo hippo_saint-omer">
                  <span>Saint-Omer</span>
                </Link>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil_Nord;

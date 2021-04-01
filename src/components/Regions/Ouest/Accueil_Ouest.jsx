import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class Accueil_Ouest extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil Ouest Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/ouest"}
        />
        <Header />
        <Footer regions={true} />
        <div className="divRegions">
          <div className="liste">
           <h1 className="titleRegion">Ouest</h1>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/maure_de_bretagne" className="hippo hippo_maure_de_bretagne">
                  <span>Maure de Bretagne</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/nantes" className="hippo hippo_nantes">
                  <span>Nantes</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/saint-malo" className="hippo hippo_saint-malo">
                  <span>Saint-Malo</span>
                </Link>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil_Ouest;

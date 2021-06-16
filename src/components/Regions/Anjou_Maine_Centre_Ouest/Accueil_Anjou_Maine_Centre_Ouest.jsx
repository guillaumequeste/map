import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class Accueil_Anjou_Maine_Centre_Ouest extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil Anjou Maine Centre Ouest Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/anjou_maine"}
        />
        <Header />
        <Footer regions={true} />
        <div className="divRegions">
          <div className="liste">
           <h1 className="titleRegion">Anjou-Maine-Centre-Ouest</h1>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/angers" className="hippo hippo_angers">
                  <span>Angers</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/cholet" className="hippo hippo_cholet">
                  <span>Cholet</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/craon" className="hippo hippo_craon">
                  <span>Craon</span>
                </Link>
              </div>
              <div className="caseRegion">
              <Link to="/laval" className="hippo hippo_laval">
                  <span>Laval</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/le_lion" className="hippo hippo_le_lion">
                  <span>Le Lion d'Angers</span>
                </Link>
              </div>
              <div className="caseRegion">
              <Link to="/meslay" className="hippo hippo_meslay">
                  <span>Meslay-du-Maine</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/segre" className="hippo hippo_segre">
                  <span>Segré</span>
                </Link>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil_Anjou_Maine_Centre_Ouest;

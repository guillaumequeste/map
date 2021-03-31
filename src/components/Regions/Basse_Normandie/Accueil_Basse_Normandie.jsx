import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class Accueil_Basse_Normandie extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil Basse-Normandie Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/basse-normandie"}
        />
        <Header />
        <Footer regions={true} />
        <div className="divRegions">
          <div className="liste">
           <h1 className="titleRegion">Anjou-Maine-Centre-Ouest</h1>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/argentan" className="hippo hippo_argentan">
                  <span>Argentan</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/cabourg" className="hippo hippo_cabourg">
                  <span>Cabourg</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/caen" className="hippo hippo_caen">
                  <span>Caen</span>
                </Link>
              </div>
              <div className="caseRegion">
              <Link to="/clairefontaine" className="hippo hippo_clairefontaine">
                  <span>Clairefontaine</span>
                </Link>
              </div>
            </div>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/deauville" className="hippo hippo_deauville">
                  <span>Deauville</span>
                </Link>
              </div>
              <div className="caseRegion">
              <Link to="/dozule" className="hippo hippo_dozule">
                  <span>Dozulé</span>
                </Link>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil_Basse_Normandie;

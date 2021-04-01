import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class Accueil_Est extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil Est Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/est"}
        />
        <Header />
        <Footer regions={true} />
        <div className="divRegions">
          <div className="liste">
           <h1 className="titleRegion">Est</h1>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/reims" className="hippo hippo_reims">
                  <span>Reims</span>
                </Link>
              </div>
              <div className="caseRegion">
                <Link to="/strasbourg" className="hippo hippo_strasbourg">
                  <span>Strasbourg</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Accueil_Est;

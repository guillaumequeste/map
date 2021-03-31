import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

class Accueil_Belgique extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Accueil Belgique Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/belgique"}
        />
        <Header />
        <Footer regions={true} />
        <div className="divRegions">
          <div className="liste">
           <h1 className="titleRegion">Belgique</h1>

            <div className="ligneRegion">
              <div className="caseRegion">
                <Link to="/mons" className="hippo hippo_mons">
                  <span>Mons</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Accueil_Belgique;

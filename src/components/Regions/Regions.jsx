import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Footer from "../Footer";
import { Link } from "react-router-dom";

class Regions extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Régions Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/regions"}
        />
        <Header />
        <Footer regions={true} />
        <div className="divRegions">
          <div className="liste">
            <h1 className="titleRegions">Régions</h1>
            <p>
              <Link to="/ile-de-france_haute-normandie" className="linkRegion linkRegionHauteNormandie">
                <span className="titleLinkRegion">
                  Ile-de-France & Haute-Normandie
                </span>
              </Link>
            </p>
            <p>
              <Link to="/nord" className="linkRegion linkRegionNord">
                <span className="titleLinkRegion">Nord</span>
              </Link>
            </p>
            <p>
              <Link to="/basse-normandie" className="linkRegion linkRegionBasseNormandie">
                <span className="titleLinkListe">Basse-Normandie</span>
              </Link>
            </p>
            <p>
              <Link to="/anjou-maine-centre-ouest" className="linkRegion linkRegionAnjouMaineCentreOuest">
                <span className="titleLinkRegion">Anjou-Maine-Centre-Ouest</span>
              </Link>
            </p>
            <p>
              <Link to="/ouest" className="linkRegion linkRegionOuest">
                <span className="titleLinkRegion">Ouest</span>
              </Link>
            </p>
            <p>
              <Link to="/est" className="linkRegion linkRegionEst">
                <span className="titleLinkRegion">Est</span>
              </Link>
            </p>
            <p>
              <Link to="/belgique" className="linkRegion linkRegionBelgique">
                <span className="titleLinkRegion">Belgique</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Regions;

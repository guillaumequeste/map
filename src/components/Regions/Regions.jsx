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
              <Link to="/ile-de-france_haute-normandie" className="linkRegion">
                <span className="titleLinkListe">
                  Ile-de-France & Haute-Normandie
                </span>
              </Link>
            </p>
            <p>
              <Link to="/nord" className="linkRegion">
                <span className="titleLinkListe">Nord</span>
              </Link>
            </p>
            <p>
              <Link to="/basse-normandie" className="linkRegion">
                <span className="titleLinkListe">Basse-Normandie</span>
              </Link>
            </p>
            <p>
              <Link to="/anjou-maine-centre-ouest" className="linkRegion">
                <span className="titleLinkListe">Anjou-Maine-Centre-Ouest</span>
              </Link>
            </p>
            <p>
              <Link to="/ouest" className="linkRegion">
                <span className="titleLinkListe">Ouest</span>
              </Link>
            </p>
            <p>
              <Link to="/est" className="linkRegion">
                <span className="titleLinkListe">Est</span>
              </Link>
            </p>
            <p>
              <Link to="/belgique" className="linkRegion">
                <span className="titleLinkListe">Belgique</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Regions;

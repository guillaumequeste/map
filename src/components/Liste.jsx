import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Liste extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Liste Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/liste"}
        />
        <Header />
        <Footer liste={true} />
        <div className="bodyListe">
          <div className="liste">
            <p>
              <Link to="/Abbeville" className="linkListe">
                <span className="titleLinkListe">Abbeville</span>
              </Link>
            </p>
            <p>
              <Link to="/Amiens" className="linkListe">
                <span className="titleLinkListe">Amiens</span>
              </Link>
            </p>
            <p>
              <Link to="/Angers" className="linkListe">
                <span className="titleLinkListe">Angers</span>
              </Link>
            </p>
            <p>
              <Link to="/Argentan" className="linkListe">
                <span className="titleLinkListe">Argentan</span>
              </Link>
            </p>
            <p>
              <Link to="/Arras" className="linkListe">
                <span className="titleLinkListe">Arras</span>
              </Link>
            </p>
            <p>
              <Link to="/Auteuil" className="linkListe">
                <span className="titleLinkListe">Auteuil</span>
              </Link>
            </p>
            <p>
              <Link to="/Bacqueville_en_Caux" className="linkListe">
                <span className="titleLinkListe">Bacqueville en Caux</span>
              </Link>
            </p>
            <p>
              <Link to="/Bernay" className="linkListe">
                <span className="titleLinkListe">Bernay</span>
              </Link>
            </p>
            <p>
              <Link to="/Bihorel" className="linkListe">
                <span className="titleLinkListe">Bihorel</span>
              </Link>
            </p>
            <p>
              <Link to="/Cabourg" className="linkListe">
                <span className="titleLinkListe">Cabourg</span>
              </Link>
            </p>
            <p>
              <Link to="/Caen" className="linkListe">
                <span className="titleLinkListe">Caen</span>
              </Link>
            </p>
            <p>
              <Link to="/Chantilly" className="linkListe">
                <span className="titleLinkListe">Chantilly</span>
              </Link>
            </p>
            <p>
              <Link to="/Chartres" className="linkListe">
                <span className="titleLinkListe">Chartres</span>
              </Link>
            </p>
            <p>
              <Link to="/Cholet" className="linkListe">
                <span className="titleLinkListe">Cholet</span>
              </Link>
            </p>
            <p>
              <Link to="/Clairefontaine" className="linkListe">
                <span className="titleLinkListe">Clairefontaine</span>
              </Link>
            </p>
            <p>
              <Link to="/Compiegne" className="linkListe">
                <span className="titleLinkListe">Compiègne</span>
              </Link>
            </p>
            <p>
              <Link to="/Craon" className="linkListe">
                <span className="titleLinkListe">Craon</span>
              </Link>
            </p>
            <p>
              <Link to="/Deauville" className="linkListe">
                <span className="titleLinkListe">Deauville</span>
              </Link>
            </p>
            <p>
              <Link to="/Dieppe" className="linkListe">
                <span className="titleLinkListe">Dieppe</span>
              </Link>
            </p>
            <p>
              <Link to="/Dozule" className="linkListe">
                <span className="titleLinkListe">Dozulé</span>
              </Link>
            </p>
            <p>
              <Link to="/Enghien" className="linkListe">
                <span className="titleLinkListe">Enghien</span>
              </Link>
            </p>
            <p>
              <Link to="/Evreux" className="linkListe">
                <span className="titleLinkListe">Evreux</span>
              </Link>
            </p>
            <p>
              <Link to="/francheville" className="linkListe">
                <span className="titleLinkListe">Francheville-la Barre</span>
              </Link>
            </p>
            <p>
              <Link to="/Fontainebleau" className="linkListe">
                <span className="titleLinkListe">Fontainebleau</span>
              </Link>
            </p>
            <p>
              <Link to="/Gournay" className="linkListe">
                <span className="titleLinkListe">Gournay en Bray</span>
              </Link>
            </p>
            <p>
              <Link to="/Graignes" className="linkListe">
                <span className="titleLinkListe">Graignes</span>
              </Link>
            </p>
            <p>
              <Link to="/La_Capelle" className="linkListe">
                <span className="titleLinkListe">La Capelle</span>
              </Link>
            </p>
            <p>
              <Link to="/La_Ferte-Vidame" className="linkListe">
                <span className="titleLinkListe">La Ferté-Vidame</span>
              </Link>
            </p>
            <p>
              <Link to="/Laval" className="linkListe">
                <span className="titleLinkListe">Laval</span>
              </Link>
            </p>
            <p>
              <Link to="/Le_Croise" className="linkListe">
                <span className="titleLinkListe">Le Croisé Laroche</span>
              </Link>
            </p>
            <p>
              <Link to="/Le_Lion" className="linkListe">
                <span className="titleLinkListe">Le Lion d'Angers</span>
              </Link>
            </p>
            <p>
              <Link to="/Le_Mont" className="linkListe">
                <span className="titleLinkListe">Le Mont-Saint-Michel</span>
              </Link>
            </p>
            <p>
              <Link to="/Le_Neubourg" className="linkListe">
                <span className="titleLinkListe">Le Neubourg</span>
              </Link>
            </p>
            <p>
              <Link to="/Le_Touquet" className="linkListe">
                <span className="titleLinkListe">Le Touquet</span>
              </Link>
            </p>
            <p>
              <Link to="/les_andelys" className="linkListe">
                <span className="titleLinkListe">Les Andelys</span>
              </Link>
            </p>
            <p>
              <Link to="/Lisieux" className="linkListe">
                <span className="titleLinkListe">Lisieux</span>
              </Link>
            </p>
            <p>
              <Link to="/Longchamp" className="linkListe">
                <span className="titleLinkListe">Longchamp</span>
              </Link>
            </p>
            <p>
              <Link to="/Maisons_Laffitte" className="linkListe">
                <span className="titleLinkListe">Maisons-Laffitte</span>
              </Link>
            </p>
            <p>
              <Link to="/Mauquenchy" className="linkListe">
                <span className="titleLinkListe">Mauquenchy</span>
              </Link>
            </p>
            <p>
              <Link to="/Maure_de_Bretagne" className="linkListe">
                <span className="titleLinkListe">Maure de Bretagne</span>
              </Link>
            </p>
            <p>
              <Link to="/Meslay" className="linkListe">
                <span className="titleLinkListe">Meslay du Maine</span>
              </Link>
            </p>
            <p>
              <Link to="/Mons" className="linkListe">
                <span className="titleLinkListe">Mons</span>
              </Link>
            </p>
            <p>
              <Link to="/Nantes" className="linkListe">
                <span className="titleLinkListe">Nantes</span>
              </Link>
            </p>
            <p>
              <Link to="/rambouillet" className="linkListe">
                <span className="titleLinkListe">Rambouillet</span>
              </Link>
            </p>
            <p>
              <Link to="/Ranes" className="linkListe">
                <span className="titleLinkListe">Rânes</span>
              </Link>
            </p>
            <p>
              <Link to="/Reims" className="linkListe">
                <span className="titleLinkListe">Reims</span>
              </Link>
            </p>
            <p>
              <Link to="/Saint_Aubin" className="linkListe">
                <span className="titleLinkListe">Saint-Aubin-lès-Elbeuf</span>
              </Link>
            </p>
            <p>
              <Link to="/Saint-Cloud" className="linkListe">
                <span className="titleLinkListe">Saint-Cloud</span>
              </Link>
            </p>
            <p>
              <Link to="/Saint-Malo" className="linkListe">
                <span className="titleLinkListe">Saint-Malo</span>
              </Link>
            </p>
            <p>
              <Link to="/Saint-Omer" className="linkListe">
                <span className="titleLinkListe">Saint-Omer</span>
              </Link>
            </p>
            <p>
              <Link to="/saint-pierre-sur-dives" className="linkListe">
                <span className="titleLinkListe">Saint-Pierre-sur-Dives</span>
              </Link>
            </p>
            <p>
              <Link to="/segre" className="linkListe">
                <span className="titleLinkListe">Segré</span>
              </Link>
            </p>
            <p>
              <Link to="/Strasbourg" className="linkListe">
                <span className="titleLinkListe">Strasbourg</span>
              </Link>
            </p>
            <p>
              <Link to="/Vincennes" className="linkListe">
                <span className="titleLinkListe">Vincennes</span>
              </Link>
            </p>
            <p>
              <Link to="/Vire" className="linkListe">
                <span className="titleLinkListe">Vire</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Liste;

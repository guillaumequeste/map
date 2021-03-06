import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import Footer from "./Footer";
import CarteHippodromes from "./CarteHippodromes";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

class Carte extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Carte Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/carte"}
        />
        <Header />
        <Footer carte={true} />
          <CarteHippodromes />
      </div>
    );
  }
}

export default Carte;

import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Footer from "../Footer";

class Regions extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Régions Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/regions"}
        />
        <Header />
        <Footer regions={true}/>
        <div className="divRegions">
          <p>Régions</p>
        </div>
      </div>
    );
  }
}

export default Regions;

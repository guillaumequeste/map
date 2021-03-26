import React, { Component } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Helmet from "./Helmet";
import Footer from "./Footer";

class Carte extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Carte Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/carte"}
        />
        <Header />
        <HeaderMobile />
        <Footer carte={true}/>
        <div className="divCarte">
          <p>Carte</p>
        </div>
      </div>
    );
  }
}

export default Carte;

import React, { Component } from "react";
import Header from "./Header";
import Helmet from "./Helmet";
import Footer from "./Footer";

class Liste extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Liste Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/liste"}
        />
        <Header />
        <Footer liste={true}/>
        <div className="divCarte">
          <p>Liste</p>
        </div>
      </div>
    );
  }
}

export default Liste;

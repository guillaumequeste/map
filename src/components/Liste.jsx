import React, { Component } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Helmet from "./Helmet";
import Footer from "./Footer";

class Liste extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Liste Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/liste"}
        />
        <Header />
        <HeaderMobile />
        <Footer liste={true}/>
        <div className="divCarte">
          <p>Liste</p>
        </div>
      </div>
    );
  }
}

export default Liste;

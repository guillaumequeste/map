import React, { Component } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Helmet from "./Helmet";
import Footer from "./Footer";

class Credits extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Crédits Chevaux"}
          link={"http://chevaux.guillaumequeste.fr/credits"}
        />
        <Header />
        <HeaderMobile />
        <Footer />
        <div className="divCredits">
          <div className="divCredits2">
            <a
              href="https://www.hippodrome-dieppe.com"
              target="_blank"
            >
              <h5 className="textContact">Hippodrome de Dieppe</h5>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Credits;

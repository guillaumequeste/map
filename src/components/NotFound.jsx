import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "./Helmet";
import { Link } from "react-router-dom";
import exit from "../img/exit.png";
import door from "../img/door.png";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"NotFound Chevaux"}
          link={"http://decouverte.guillaumequeste.fr/notfound"}
        />
        <Header />
        <Footer />
        <div className="notFound">
          <div className="divNotFound">
            <div>
              <img src={exit} alt="exit" className="imgExit" />
            </div>
            <div>
              <Link to="/">
                <img src={door} alt="door" className="imgDoor" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;

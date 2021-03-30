import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import abbeville from "../../../img/abbeville/abbeville.jpg";
import abbeville2 from "../../../img/abbeville/abbeville2.jpg";
import abbeville3 from "../../../img/abbeville/abbeville3.jpg";
import abbeville4 from "../../../img/abbeville/abbeville4.jpg";
import abbeville5 from "../../../img/abbeville/abbeville5.jpg";
import abbeville6 from "../../../img/abbeville/abbeville6.jpg";
import abbeville7 from "../../../img/abbeville/abbeville7.jpg";
import abbeville8 from "../../../img/abbeville/abbeville8.jpg";
import abbeville9 from "../../../img/abbeville/abbeville9.jpg";
import abbeville10 from "../../../img/abbeville/abbeville10.jpg";
import abbeville11 from "../../../img/abbeville/abbeville11.jpg";

class Abbeville extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Abbeville",
      image: "abbeville.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "1 400 m",
      region: "Hauts de France",
      departement: "Somme",
      ville: "Abbeville",
      surnom: "hippodrome de la Prairie Malicorne"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Abbeville Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/abbeville"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={abbeville}
              alt={this.state.nom}
              className="tailleImage"
            />
          </div>
          <Roll right>
            <div className="description">
              <h2 className="titreCard">{this.state.nom}</h2>
              <ul>
                <li className="liCard">
                  <strong>Piste : </strong>
                  {this.state.piste}
                </li>
                <li className="liCard">
                  <strong>Corde : </strong>
                  {this.state.corde}
                </li>
                <li className="liCard">
                  <strong>Circonference : </strong>
                  {this.state.circonference}
                </li>
                <li className="liCard">
                  <strong>Région : </strong>
                  {this.state.region}
                </li>
                <li className="liCard">
                  <strong>Département : </strong>
                  {this.state.departement}
                </li>
                <li className="liCard">
                  <strong>Ville à proximité : </strong>
                  {this.state.ville}
                </li>
                <li className="liCard">
                  <strong>Surnom : </strong>
                  {this.state.surnom}
                </li>
                <li className="liCard">
                  <i>&darr; + de photos &darr;</i>
                </li>
              </ul>
            </div>
          </Roll>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={abbeville2}
                alt="abbeville2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={abbeville3}
                alt="abbeville3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={abbeville4}
                alt="abbeville4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={abbeville5}
                alt="abbeville5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={abbeville6}
                alt="abbeville6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={abbeville7}
                alt="abbeville7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={abbeville8}
                alt="abbeville8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={abbeville9}
                alt="abbeville9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={abbeville10}
                alt="abbeville10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={abbeville11}
                alt="abbeville11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Abbeville;

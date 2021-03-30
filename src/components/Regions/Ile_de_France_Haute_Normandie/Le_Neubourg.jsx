import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import le_neubourg from "../../../img/le_neubourg/le_neubourg.jpg";
import le_neubourg2 from "../../../img/le_neubourg/le_neubourg2.jpg";
import le_neubourg3 from "../../../img/le_neubourg/le_neubourg3.jpg";
import le_neubourg4 from "../../../img/le_neubourg/le_neubourg4.jpg";
import le_neubourg5 from "../../../img/le_neubourg/le_neubourg5.jpg";
import le_neubourg6 from "../../../img/le_neubourg/le_neubourg6.jpg";
import le_neubourg7 from "../../../img/le_neubourg/le_neubourg7.jpg";

class Le_Neubourg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Le Neubourg",
      image: "le_neubourg.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "804 m",
      region: "Haute-Normandie",
      departement: "Eure",
      ville: "Le Neubourg",
      surnom: "hippodrome Henri Bonnel"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Le Neubourg Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/le_neubourg"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={le_neubourg}
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
                src={le_neubourg2}
                alt="le_neubourg2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_neubourg3}
                alt="le_neubourg3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_neubourg4}
                alt="le_neubourg4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_neubourg5}
                alt="le_neubourg5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={le_neubourg6}
                alt="le_neubourg6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_neubourg7}
                alt="le_neubourg7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Le_Neubourg;

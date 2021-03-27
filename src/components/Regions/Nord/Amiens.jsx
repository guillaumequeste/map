import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import amiens from "../../../img/amiens/amiens.jpg";
import amiens2 from "../../../img/amiens/amiens2.jpg";
import amiens3 from "../../../img/amiens/amiens3.jpg";
import amiens4 from "../../../img/amiens/amiens4.jpg";
import amiens5 from "../../../img/amiens/amiens5.jpg";
import amiens6 from "../../../img/amiens/amiens6.jpg";
import amiens7 from "../../../img/amiens/amiens7.jpg";

class Amiens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Amiens",
      image: "amiens.jpg",
      piste: "herbe et pouzzolane",
      corde: "droite",
      circonference: "1 262 m",
      region: "Hauts-de-France",
      departement: "Somme",
      ville: "Amiens",
      surnom: "hippodrome du petit Saint-Jean"
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={amiens}
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
                src={amiens2}
                alt="amiens2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={amiens3}
                alt="amiens3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={amiens4}
                alt="amiens4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={amiens5}
                alt="amiens5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={amiens6}
                alt="amiens6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={amiens7}
                alt="amiens7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Amiens;

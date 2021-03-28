import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import le_lion from "../../../img/le_lion/le_lion.jpg";
import le_lion2 from "../../../img/le_lion/le_lion2.jpg";
import le_lion3 from "../../../img/le_lion/le_lion3.jpg";
import le_lion4 from "../../../img/le_lion/le_lion4.jpg";
import le_lion5 from "../../../img/le_lion/le_lion5.jpg";
import le_lion6 from "../../../img/le_lion/le_lion6.jpg";
import le_lion7 from "../../../img/le_lion/le_lion7.jpg";
import le_lion8 from "../../../img/le_lion/le_lion8.jpg";
import le_lion9 from "../../../img/le_lion/le_lion9.jpg";
import le_lion10 from "../../../img/le_lion/le_lion10.jpg";
import le_lion11 from "../../../img/le_lion/le_lion11.jpg";
import le_lion12 from "../../../img/le_lion/le_lion12.jpg";
import le_lion13 from "../../../img/le_lion/le_lion13.jpg";
import le_lion14 from "../../../img/le_lion/le_lion14.jpg";
import le_lion15 from "../../../img/le_lion/le_lion15.jpg";

class Le_Lion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Le Lion d'Angers",
      image: "le_lion.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "1 625 m",
      region: "Pays de la Loire",
      departement: "Maine-et-Loire",
      ville: "Le Lion d'Angers",
      surnom: "hippodrome de l'Isle-Briand"
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
              src={le_lion}
              alt={this.state.nom}
              className="tailleImage"
            />
          </div>
          <Roll right>
            <div className="description">
              <h2 className="titreCard long">{this.state.nom}</h2>
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
                src={le_lion2}
                alt="le_lion2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_lion3}
                alt="le_lion3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_lion4}
                alt="le_lion4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_lion5}
                alt="le_lion5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_lion6}
                alt="le_lion6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_lion7}
                alt="le_lion7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_lion8}
                alt="le_lion8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_lion9}
                alt="le_lion9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_lion10}
                alt="le_lion10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_lion11}
                alt="le_lion11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_lion12}
                alt="le_lion12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_lion13}
                alt="le_lion13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={le_lion14}
                alt="le_lion14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_lion15}
                alt="le_lion15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Le_Lion;

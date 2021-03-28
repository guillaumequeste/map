import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import le_mont from "../../../img/le_mont/le_mont.jpg";
import le_mont2 from "../../../img/le_mont/le_mont2.jpg";
import le_mont3 from "../../../img/le_mont/le_mont3.jpg";
import le_mont4 from "../../../img/le_mont/le_mont4.jpg";
import le_mont5 from "../../../img/le_mont/le_mont5.jpg";
import le_mont6 from "../../../img/le_mont/le_mont6.jpg";
import le_mont7 from "../../../img/le_mont/le_mont7.jpg";
import le_mont8 from "../../../img/le_mont/le_mont8.jpg";
import le_mont9 from "../../../img/le_mont/le_mont9.jpg";
import le_mont10 from "../../../img/le_mont/le_mont10.jpg";
import le_mont11 from "../../../img/le_mont/le_mont11.jpg";

class Le_Mont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Le Mont-Saint-Michel",
      image: "le_mont.jpg",
      piste: "sable rose",
      corde: "droite",
      circonference: "1 200 m",
      region: "Basse-Normandie",
      departement: "Manche",
      ville: "Le Mont-Saint-Michel",
      surnom: "hippodrome Maurice Jan",
      surnom2: "hippodrome de l'Anse de Moidrey"
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
              src={le_mont}
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
                  <strong>Surnom : </strong>
                  {this.state.surnom2}
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
                src={le_mont2}
                alt="le_mont2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_mont3}
                alt="le_mont3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_mont4}
                alt="le_mont4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_mont5}
                alt="le_mont5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_mont6}
                alt="le_mont6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_mont7}
                alt="le_mont7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_mont8}
                alt="le_mont8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_mont9}
                alt="le_mont9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={le_mont10}
                alt="le_mont10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_mont11}
                alt="le_mont11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Le_Mont;

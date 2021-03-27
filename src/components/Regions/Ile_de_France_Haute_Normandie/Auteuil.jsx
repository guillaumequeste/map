import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import auteuil from "../../../img/auteuil/auteuil.jpg";
import auteuil2 from "../../../img/auteuil/auteuil2.jpg";
import auteuil3 from "../../../img/auteuil/auteuil3.jpg";
import auteuil4 from "../../../img/auteuil/auteuil4.jpg";
import auteuil5 from "../../../img/auteuil/auteuil5.jpg";
import auteuil6 from "../../../img/auteuil/auteuil6.jpg";
import auteuil7 from "../../../img/auteuil/auteuil7.jpg";
import auteuil8 from "../../../img/auteuil/auteuil8.jpg";
import auteuil9 from "../../../img/auteuil/auteuil9.jpg";
import auteuil10 from "../../../img/auteuil/auteuil10.jpg";
import auteuil11 from "../../../img/auteuil/auteuil11.jpg";
import auteuil12 from "../../../img/auteuil/auteuil12.jpg";
import auteuil13 from "../../../img/auteuil/auteuil13.jpg";
import auteuil14 from "../../../img/auteuil/auteuil14.jpg";
import auteuil15 from "../../../img/auteuil/auteuil15.jpg";
import auteuil16 from "../../../img/auteuil/auteuil16.jpg";
import auteuil17 from "../../../img/auteuil/auteuil17.jpg";

class Auteuil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Auteuil",
      image: "auteuil.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "2 400 m",
      region: "Ile de France",
      departement: "Paris 16ème",
      ville: "Paris",
      surnom: "hippodrome d'Auteuil"
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
              src={auteuil}
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
                src={auteuil2}
                alt="auteuil2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={auteuil3}
                alt="auteuil3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={auteuil4}
                alt="auteuil4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={auteuil5}
                alt="auteuil5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={auteuil6}
                alt="auteuil6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={auteuil7}
                alt="auteuil7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={auteuil8}
                alt="auteuil8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={auteuil9}
                alt="auteuil9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={auteuil10}
                alt="auteuil10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={auteuil11}
                alt="auteuil11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={auteuil12}
                alt="auteuil12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={auteuil13}
                alt="auteuil13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={auteuil14}
                alt="auteuil14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={auteuil15}
                alt="auteuil15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={auteuil6}
                alt="auteuil16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={auteuil7}
                alt="auteuil17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Auteuil;

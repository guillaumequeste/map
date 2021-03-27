import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import evreux from "../../../img/evreux/evreux.jpg";
import evreux2 from "../../../img/evreux/evreux2.jpg";
import evreux3 from "../../../img/evreux/evreux3.jpg";
import evreux4 from "../../../img/evreux/evreux4.jpg";
import evreux5 from "../../../img/evreux/evreux5.jpg";
import evreux6 from "../../../img/evreux/evreux6.jpg";
import evreux7 from "../../../img/evreux/evreux7.jpg";
import evreux8 from "../../../img/evreux/evreux8.jpg";
import evreux9 from "../../../img/evreux/evreux9.jpg";
import evreux10 from "../../../img/evreux/evreux10.jpg";
import evreux11 from "../../../img/evreux/evreux11.jpg";
import evreux12 from "../../../img/evreux/evreux12.jpg";
import evreux13 from "../../../img/evreux/evreux13.jpg";

class Evreux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Evreux",
      image: "evreux.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "1 500 m",
      region: "Haute-Normandie",
      departement: "Eure",
      ville: "Evreux",
      surnom: "hippodrome de Navarre"
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
              src={evreux}
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
                src={evreux2}
                alt="evreux2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={evreux3}
                alt="evreux3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={evreux4}
                alt="evreux4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={evreux5}
                alt="evreux5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={evreux6}
                alt="evreux6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={evreux7}
                alt="evreux7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={evreux8}
                alt="evreux8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={evreux9}
                alt="evreux9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={evreux10}
                alt="evreux10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={evreux11}
                alt="evreux11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={evreux12}
                alt="evreux12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={evreux13}
                alt="evreux13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Evreux;

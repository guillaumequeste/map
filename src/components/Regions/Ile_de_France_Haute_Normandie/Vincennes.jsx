import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import vincennes from "../../../img/vincennes/vincennes.jpg";
import vincennes2 from "../../../img/vincennes/vincennes2.jpg";
import vincennes3 from "../../../img/vincennes/vincennes3.jpg";
import vincennes4 from "../../../img/vincennes/vincennes4.jpg";
import vincennes5 from "../../../img/vincennes/vincennes5.jpg";
import vincennes6 from "../../../img/vincennes/vincennes6.jpg";
import vincennes7 from "../../../img/vincennes/vincennes7.jpg";
import vincennes8 from "../../../img/vincennes/vincennes8.jpg";
import vincennes9 from "../../../img/vincennes/vincennes9.jpg";
import vincennes10 from "../../../img/vincennes/vincennes10.jpg";
import vincennes11 from "../../../img/vincennes/vincennes11.jpg";

class Vincennes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Vincennes",
      image: "vincennes.jpg",
      piste: "cendrée",
      corde: "gauche",
      circonference: "2 100 m",
      region: "Ile de France",
      departement: "Paris 12ème",
      ville: "Paris",
      surnom: "hippodrome du plateau de Gravelle"
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
              src={vincennes}
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
                src={vincennes2}
                alt="vincennes2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vincennes3}
                alt="vincennes3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vincennes4}
                alt="vincennes4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vincennes5}
                alt="vincennes5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vincennes6}
                alt="vincennes6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vincennes7}
                alt="vincennes7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vincennes8}
                alt="vincennes8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vincennes9}
                alt="vincennes9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={vincennes10}
                alt="vincennes10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vincennes11}
                alt="vincennes11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Vincennes;

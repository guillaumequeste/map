import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import lisieux from "../../../img/lisieux/lisieux01.jpg";
import lisieux2 from "../../../img/lisieux/lisieux02.jpg";
import lisieux3 from "../../../img/lisieux/lisieux03.jpg";
import lisieux4 from "../../../img/lisieux/lisieux04.jpg";
import lisieux5 from "../../../img/lisieux/lisieux05.jpg";
import lisieux6 from "../../../img/lisieux/lisieux06.jpg";
import lisieux7 from "../../../img/lisieux/lisieux07.jpg";
import lisieux8 from "../../../img/lisieux/lisieux08.jpg";
import lisieux9 from "../../../img/lisieux/lisieux09.jpg";
import lisieux10 from "../../../img/lisieux/lisieux10.jpg";
import lisieux11 from "../../../img/lisieux/lisieux11.jpg";
import lisieux12 from "../../../img/lisieux/lisieux12.jpg";
import lisieux13 from "../../../img/lisieux/lisieux13.jpg";
import lisieux14 from "../../../img/lisieux/lisieux14.jpg";
import lisieux15 from "../../../img/lisieux/lisieux15.jpg";
import lisieux16 from "../../../img/lisieux/lisieux16.jpg";
import lisieux17 from "../../../img/lisieux/lisieux17.jpg";
import lisieux18 from "../../../img/lisieux/lisieux18.jpg";

class Lisieux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Lisieux",
      image: "lisieux.jpg",
      piste: "herbe et sable",
      corde: "droite",
      circonference: "1 520 m",
      region: "Basse-Normandie",
      departement: "Calvados",
      ville: "Lisieux",
      surnom: "hippodrome de la Trésorerie"
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
              src={lisieux}
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
                src={lisieux2}
                alt="lisieux02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={lisieux3}
                alt="lisieux03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={lisieux4}
                alt="lisieux04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={lisieux5}
                alt="lisieux05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={lisieux6}
                alt="lisieux06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={lisieux7}
                alt="lisieux07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={lisieux8}
                alt="lisieux08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={lisieux9}
                alt="lisieux09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={lisieux10}
                alt="lisieux10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={lisieux11}
                alt="lisieux11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={lisieux12}
                alt="lisieux12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={lisieux13}
                alt="lisieux13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={lisieux14}
                alt="lisieux14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={lisieux15}
                alt="lisieux15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={lisieux16}
                alt="lisieux16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={lisieux17}
                alt="lisieux17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={lisieux18}
                alt="lisieux18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Lisieux;

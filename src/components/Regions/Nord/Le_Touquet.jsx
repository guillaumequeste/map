import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import le_touquet from "../../../img/le_touquet/le_touquet.jpg";
import le_touquet2 from "../../../img/le_touquet/le_touquet2.jpg";
import le_touquet3 from "../../../img/le_touquet/le_touquet3.jpg";
import le_touquet4 from "../../../img/le_touquet/le_touquet4.jpg";
import le_touquet5 from "../../../img/le_touquet/le_touquet5.jpg";
import le_touquet6 from "../../../img/le_touquet/le_touquet6.jpg";
import le_touquet7 from "../../../img/le_touquet/le_touquet7.jpg";
import le_touquet8 from "../../../img/le_touquet/le_touquet8.jpg";
import le_touquet9 from "../../../img/le_touquet/le_touquet9.jpg";
import le_touquet10 from "../../../img/le_touquet/le_touquet10.jpg";
import le_touquet11 from "../../../img/le_touquet/le_touquet11.jpg";
import le_touquet12 from "../../../img/le_touquet/le_touquet12.jpg";
import le_touquet13 from "../../../img/le_touquet/le_touquet13.jpg";
import le_touquet14 from "../../../img/le_touquet/le_touquet14.jpg";
import le_touquet15 from "../../../img/le_touquet/le_touquet15.jpg";
import le_touquet16 from "../../../img/le_touquet/le_touquet16.jpg";
import le_touquet17 from "../../../img/le_touquet/le_touquet17.jpg";
import le_touquet18 from "../../../img/le_touquet/le_touquet18.jpg";
import le_touquet19 from "../../../img/le_touquet/le_touquet19.jpg";
import le_touquet20 from "../../../img/le_touquet/le_touquet20.jpg";
import le_touquet21 from "../../../img/le_touquet/le_touquet21.jpg";

class Le_Touquet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Le Touquet",
      image: "le_touquet.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "1 800 m",
      region: "Hauts-de-France",
      departement: "Pas-de-Calais",
      ville: "Le Touquet-Paris-Plage",
      surnom: "hippodrome de la Canche"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Le Touquet Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/le_touquet"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={le_touquet}
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
                src={le_touquet2}
                alt="le_touquet2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet3}
                alt="le_touquet3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet4}
                alt="le_touquet4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet5}
                alt="le_touquet5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet6}
                alt="le_touquet6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet7}
                alt="le_touquet7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet8}
                alt="le_touquet8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet9}
                alt="le_touquet9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet10}
                alt="le_touquet10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet11}
                alt="le_touquet11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet12}
                alt="le_touquet12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet13}
                alt="le_touquet13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet14}
                alt="le_touquet14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet15}
                alt="le_touquet15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet16}
                alt="le_touquet16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet17}
                alt="le_touquet17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet18}
                alt="le_touquet18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet19}
                alt="le_touquet19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={le_touquet20}
                alt="le_touquet20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_touquet21}
                alt="le_touquet21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Le_Touquet;

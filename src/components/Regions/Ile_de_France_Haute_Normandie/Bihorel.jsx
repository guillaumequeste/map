import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import bihorel from "../../../img/bihorel/bihorel.jpg";
import bihorel2 from "../../../img/bihorel/bihorel2.jpg";
import bihorel3 from "../../../img/bihorel/bihorel3.jpg";
import bihorel4 from "../../../img/bihorel/bihorel4.jpg";
import bihorel5 from "../../../img/bihorel/bihorel5.jpg";
import bihorel6 from "../../../img/bihorel/bihorel6.jpg";
import bihorel7 from "../../../img/bihorel/bihorel7.jpg";
import bihorel8 from "../../../img/bihorel/bihorel8.jpg";
import bihorel9 from "../../../img/bihorel/bihorel9.jpg";
import bihorel10 from "../../../img/bihorel/bihorel10.jpg";
import bihorel11 from "../../../img/bihorel/bihorel11.jpg";
import bihorel12 from "../../../img/bihorel/bihorel12.jpg";
import bihorel13 from "../../../img/bihorel/bihorel13.jpg";
import bihorel14 from "../../../img/bihorel/bihorel14.jpg";
import bihorel15 from "../../../img/bihorel/bihorel15.jpg";

class Bihorel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Bihorel",
      image: "bihorel.jpg",
      piste: "sable",
      corde: "droite",
      circonference: "1 000 m",
      region: "Haute-Normandie",
      departement: "Seine-Maritime",
      ville: "Rouen",
      surnom: "hippodrome des Trois Pipes"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Bihorel Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/bihorel"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={bihorel}
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
                src={bihorel2}
                alt="bihorel2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bihorel3}
                alt="bihorel3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bihorel4}
                alt="bihorel4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bihorel5}
                alt="bihorel5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bihorel6}
                alt="bihorel6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bihorel7}
                alt="bihorel7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bihorel8}
                alt="bihorel8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bihorel9}
                alt="bihorel9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bihorel10}
                alt="bihorel10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bihorel11}
                alt="bihorel11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bihorel12}
                alt="bihorel12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bihorel13}
                alt="bihorel13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={bihorel14}
                alt="bihorel14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bihorel15}
                alt="bihorel15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Bihorel;

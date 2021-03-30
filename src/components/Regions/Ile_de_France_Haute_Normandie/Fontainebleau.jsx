import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import fontainebleau from "../../../img/fontainebleau/fontainebleau.jpg";
import fontainebleau2 from "../../../img/fontainebleau/fontainebleau2.jpg";
import fontainebleau3 from "../../../img/fontainebleau/fontainebleau3.jpg";
import fontainebleau4 from "../../../img/fontainebleau/fontainebleau4.jpg";
import fontainebleau5 from "../../../img/fontainebleau/fontainebleau5.jpg";
import fontainebleau6 from "../../../img/fontainebleau/fontainebleau6.jpg";
import fontainebleau7 from "../../../img/fontainebleau/fontainebleau7.jpg";
import fontainebleau8 from "../../../img/fontainebleau/fontainebleau8.jpg";
import fontainebleau9 from "../../../img/fontainebleau/fontainebleau9.jpg";
import fontainebleau10 from "../../../img/fontainebleau/fontainebleau10.jpg";
import fontainebleau11 from "../../../img/fontainebleau/fontainebleau11.jpg";

class Fontainebleau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Fontainebleau",
      image: "fontainebleau.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "2 000 m",
      region: "Ile-de-France",
      departement: "Seine-et-Marne",
      ville: "Fontainebleau",
      surnom: "hippodrome de la Solle"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Fontainebleau Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/fontainebleau"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={fontainebleau}
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
                src={fontainebleau2}
                alt="fontainebleau2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau3}
                alt="fontainebleau3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau4}
                alt="fontainebleau4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau5}
                alt="fontainebleau5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau6}
                alt="fontainebleau6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau7}
                alt="fontainebleau7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau8}
                alt="fontainebleau8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau9}
                alt="fontainebleau9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau10}
                alt="fontainebleau10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={fontainebleau11}
                alt="fontainebleau11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Fontainebleau;

import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import nantes from "../../../img/nantes/nantes.jpg";
import nantes2 from "../../../img/nantes/nantes2.jpg";
import nantes3 from "../../../img/nantes/nantes3.jpg";
import nantes4 from "../../../img/nantes/nantes4.jpg";
import nantes5 from "../../../img/nantes/nantes5.jpg";
import nantes6 from "../../../img/nantes/nantes6.jpg";
import nantes7 from "../../../img/nantes/nantes7.jpg";
import nantes8 from "../../../img/nantes/nantes8.jpg";
import nantes9 from "../../../img/nantes/nantes9.jpg";
import nantes10 from "../../../img/nantes/nantes10.jpg";
import nantes11 from "../../../img/nantes/nantes11.jpg";
import nantes12 from "../../../img/nantes/nantes12.jpg";
import nantes13 from "../../../img/nantes/nantes13.jpg";

class Nantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Nantes",
      image: "nantes.jpg",
      piste: "herbe et sable",
      corde: "gauche",
      circonference: "2 068 m",
      region: "Pays de la Loire",
      departement: "Loire-Atlantique",
      ville: "Nantes",
      surnom: "hippodrome du Petit Port"
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
              src={nantes}
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
                src={nantes2}
                alt="nantes2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={nantes3}
                alt="nantes3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={nantes4}
                alt="nantes4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={nantes5}
                alt="nantes5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={nantes6}
                alt="nantes6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={nantes7}
                alt="nantes7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={nantes8}
                alt="nantes8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={nantes9}
                alt="nantes9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={nantes10}
                alt="nantes10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={nantes11}
                alt="nantes11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={nantes12}
                alt="nantes12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={nantes13}
                alt="nantes13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Nantes;

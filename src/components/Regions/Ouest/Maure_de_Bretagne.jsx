import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import maure_de_bretagne from "../../../img/maure_de_bretagne/maure_de_bretagne.jpg";
import maure_de_bretagne2 from "../../../img/maure_de_bretagne/maure_de_bretagne2.jpg";
import maure_de_bretagne3 from "../../../img/maure_de_bretagne/maure_de_bretagne3.jpg";
import maure_de_bretagne4 from "../../../img/maure_de_bretagne/maure_de_bretagne4.jpg";
import maure_de_bretagne5 from "../../../img/maure_de_bretagne/maure_de_bretagne5.jpg";
import maure_de_bretagne6 from "../../../img/maure_de_bretagne/maure_de_bretagne6.jpg";
import maure_de_bretagne7 from "../../../img/maure_de_bretagne/maure_de_bretagne7.jpg";
import maure_de_bretagne8 from "../../../img/maure_de_bretagne/maure_de_bretagne8.jpg";
import maure_de_bretagne9 from "../../../img/maure_de_bretagne/maure_de_bretagne9.jpg";
import maure_de_bretagne10 from "../../../img/maure_de_bretagne/maure_de_bretagne10.jpg";
import maure_de_bretagne11 from "../../../img/maure_de_bretagne/maure_de_bretagne11.jpg";
import maure_de_bretagne12 from "../../../img/maure_de_bretagne/maure_de_bretagne12.jpg";
import maure_de_bretagne13 from "../../../img/maure_de_bretagne/maure_de_bretagne13.jpg";
import maure_de_bretagne14 from "../../../img/maure_de_bretagne/maure_de_bretagne14.jpg";
import maure_de_bretagne15 from "../../../img/maure_de_bretagne/maure_de_bretagne15.jpg";

class Maure_de_Bretagne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Maure de Bretagne",
      image: "maure_de_bretagne.jpg",
      piste: "herbe et sable",
      corde: "gauche",
      circonference: "1 300 m",
      region: "Bretagne",
      departement: "Ile-et-Vilaine",
      ville: "Rennes",
      surnom: "hippodrome des Bruyères"
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
              src={maure_de_bretagne}
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
                src={maure_de_bretagne2}
                alt="maure_de_bretagne2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne3}
                alt="maure_de_bretagne3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne4}
                alt="maure_de_bretagne4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne5}
                alt="maure_de_bretagne5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne6}
                alt="maure_de_bretagne6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne7}
                alt="maure_de_bretagne7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne8}
                alt="maure_de_bretagne8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne9}
                alt="maure_de_bretagne9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne10}
                alt="maure_de_bretagne10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne11}
                alt="maure_de_bretagne11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne12}
                alt="maure_de_bretagne12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne13}
                alt="maure_de_bretagne13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne14}
                alt="maure_de_bretagne14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maure_de_bretagne15}
                alt="maure_de_bretagne15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Maure_de_Bretagne;

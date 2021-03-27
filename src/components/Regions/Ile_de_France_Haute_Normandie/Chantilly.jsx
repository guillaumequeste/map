import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import chantilly from "../../../img/chantilly/chantilly.jpg";
import chantilly2 from "../../../img/chantilly/chantilly2.jpg";
import chantilly3 from "../../../img/chantilly/chantilly3.jpg";
import chantilly4 from "../../../img/chantilly/chantilly4.jpg";
import chantilly5 from "../../../img/chantilly/chantilly5.jpg";
import chantilly6 from "../../../img/chantilly/chantilly6.jpg";
import chantilly7 from "../../../img/chantilly/chantilly7.jpg";
import chantilly8 from "../../../img/chantilly/chantilly8.jpg";
import chantilly9 from "../../../img/chantilly/chantilly9.jpg";
import chantilly10 from "../../../img/chantilly/chantilly10.jpg";
import chantilly11 from "../../../img/chantilly/chantilly11.jpg";

class Chantilly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Chantilly",
      image: "chantilly.jpg",
      piste: "herbe et PSF",
      corde: "droite",
      circonference: "2 000 m",
      region: "Hauts-de-France",
      departement: "Oise",
      ville: "Chantilly",
      surnom: "hippodrome de Chantilly"
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
              src={chantilly}
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
                src={chantilly2}
                alt="chantilly2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chantilly3}
                alt="chantilly3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={chantilly4}
                alt="chantilly4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chantilly5}
                alt="chantilly5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={chantilly6}
                alt="chantilly6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chantilly7}
                alt="chantilly7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={chantilly8}
                alt="chantilly8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chantilly9}
                alt="chantilly9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={chantilly10}
                alt="chantilly10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chantilly11}
                alt="chantilly11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Chantilly;

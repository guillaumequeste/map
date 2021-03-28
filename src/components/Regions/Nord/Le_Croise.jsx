import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import le_croise from "../../../img/le_croise/le_croise.jpg";
import le_croise2 from "../../../img/le_croise/le_croise2.jpg";
import le_croise3 from "../../../img/le_croise/le_croise3.jpg";
import le_croise4 from "../../../img/le_croise/le_croise4.jpg";
import le_croise5 from "../../../img/le_croise/le_croise5.jpg";
import le_croise6 from "../../../img/le_croise/le_croise6.jpg";
import le_croise7 from "../../../img/le_croise/le_croise7.jpg";
import le_croise8 from "../../../img/le_croise/le_croise8.jpg";
import le_croise9 from "../../../img/le_croise/le_croise9.jpg";
import le_croise10 from "../../../img/le_croise/le_croise10.jpg";
import le_croise11 from "../../../img/le_croise/le_croise11.jpg";
import le_croise12 from "../../../img/le_croise/le_croise12.jpg";
import le_croise13 from "../../../img/le_croise/le_croise13.jpg";
import le_croise14 from "../../../img/le_croise/le_croise14.jpg";
import le_croise15 from "../../../img/le_croise/le_croise15.jpg";
import le_croise16 from "../../../img/le_croise/le_croise16.jpg";
import le_croise17 from "../../../img/le_croise/le_croise17.jpg";

class Le_Croise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Le Croisé Laroche",
      image: "le_croise.jpg",
      piste: "herbe et cendrée",
      corde: "gauche",
      circonference: "1 665 m",
      region: "Hauts-de-France",
      departement: "Nord",
      ville: "Marcq-en-Baroeul",
      surnom: "hippodrome des Flandres"
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
              src={le_croise}
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
                src={le_croise2}
                alt="le_croise2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_croise3}
                alt="le_croise3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_croise4}
                alt="le_croise4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_croise5}
                alt="le_croise5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_croise6}
                alt="le_croise6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_croise7}
                alt="le_croise7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_croise8}
                alt="le_croise8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_croise9}
                alt="le_croise9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_croise10}
                alt="le_croise10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_croise11}
                alt="le_croise11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_croise12}
                alt="le_croise12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_croise13}
                alt="le_croise13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={le_croise14}
                alt="le_croise14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_croise15}
                alt="le_croise15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={le_croise16}
                alt="le_croise16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={le_croise17}
                alt="le_croise17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Le_Croise;

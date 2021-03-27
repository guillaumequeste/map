import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import argentan from "../../../img/argentan/argentan.jpg";
import argentan2 from "../../../img/argentan/argentan2.jpg";
import argentan3 from "../../../img/argentan/argentan3.jpg";
import argentan4 from "../../../img/argentan/argentan4.jpg";
import argentan5 from "../../../img/argentan/argentan5.jpg";
import argentan6 from "../../../img/argentan/argentan6.jpg";
import argentan7 from "../../../img/argentan/argentan7.jpg";
import argentan8 from "../../../img/argentan/argentan8.jpg";
import argentan9 from "../../../img/argentan/argentan9.jpg";
import argentan10 from "../../../img/argentan/argentan10.jpg";
import argentan11 from "../../../img/argentan/argentan11.jpg";
import argentan12 from "../../../img/argentan/argentan12.jpg";
import argentan13 from "../../../img/argentan/argentan13.jpg";
import argentan14 from "../../../img/argentan/argentan14.jpg";
import argentan15 from "../../../img/argentan/argentan15.jpg";
import argentan16 from "../../../img/argentan/argentan16.jpg";
import argentan17 from "../../../img/argentan/argentan17.jpg";

class Argentan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Argentan",
      image: "argentan.jpg",
      piste: "herbe et sable",
      corde: "droite",
      circonference: "1 300 m",
      region: "Basse-Normandie",
      departement: "Orne",
      ville: "Argentan",
      surnom: "hippodrome d'Argentan"
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
              src={argentan}
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
                src={argentan2}
                alt="argentan2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={argentan3}
                alt="argentan3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={argentan4}
                alt="argentan4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={argentan5}
                alt="argentan5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={argentan6}
                alt="argentan6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={argentan7}
                alt="argentan7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={argentan8}
                alt="argentan8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={argentan9}
                alt="argentan9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={argentan10}
                alt="argentan10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={argentan11}
                alt="argentan11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={argentan12}
                alt="argentan12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={argentan13}
                alt="argentan13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={argentan14}
                alt="argentan14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={argentan15}
                alt="argentan15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={argentan16}
                alt="argentan16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={argentan17}
                alt="argentan17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Argentan;

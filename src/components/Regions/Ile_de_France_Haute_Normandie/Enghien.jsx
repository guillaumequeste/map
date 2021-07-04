import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import enghien01 from "../../../img/enghien/enghien01.jpg";
import enghien02 from "../../../img/enghien/enghien02.jpg";
import enghien03 from "../../../img/enghien/enghien03.jpg";
import enghien04 from "../../../img/enghien/enghien04.jpg";
import enghien05 from "../../../img/enghien/enghien05.jpg";
import enghien06 from "../../../img/enghien/enghien06.jpg";
import enghien07 from "../../../img/enghien/enghien07.jpg";
import enghien08 from "../../../img/enghien/enghien08.jpg";
import enghien09 from "../../../img/enghien/enghien09.jpg";
import enghien10 from "../../../img/enghien/enghien10.jpg";
import enghien11 from "../../../img/enghien/enghien11.jpg";
import enghien12 from "../../../img/enghien/enghien12.jpg";
import enghien13 from "../../../img/enghien/enghien13.jpg";
import enghien14 from "../../../img/enghien/enghien14.jpg";
import enghien15 from "../../../img/enghien/enghien15.jpg";
import enghien16 from "../../../img/enghien/enghien16.jpg";
import enghien17 from "../../../img/enghien/enghien17.jpg";
import enghien18 from "../../../img/enghien/enghien18.jpg";
import enghien19 from "../../../img/enghien/enghien19.jpg";
import enghien20 from "../../../img/enghien/enghien20.jpg";
import enghien21 from "../../../img/enghien/enghien21.jpg";
import enghien22 from "../../../img/enghien/enghien22.jpg";
import enghien23 from "../../../img/enghien/enghien23.jpg";
import enghien24 from "../../../img/enghien/enghien24.jpg";
import enghien25 from "../../../img/enghien/enghien25.jpg";
import enghien26 from "../../../img/enghien/enghien26.jpg";
import enghien27 from "../../../img/enghien/enghien27.jpg";
import enghien28 from "../../../img/enghien/enghien28.jpg";
import enghien29 from "../../../img/enghien/enghien29.jpg";
import enghien30 from "../../../img/enghien/enghien30.jpg";
import enghien31 from "../../../img/enghien/enghien31.jpg";

class Enghien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Enghien",
      image: "enghien01.jpg",
      piste: "sable",
      corde: "gauche",
      circonference: "1 200 m",
      region: "Ile-de-France",
      departement: "Val-d'Oise",
      ville: "Enghien-les-Bains",
      surnom: "hippodrome d'Enghien-Soisy"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Enghien Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/enghien"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={enghien01}
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
                src={enghien02}
                alt="enghien02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien03}
                alt="enghien03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien04}
                alt="enghien04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien05}
                alt="enghien05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien06}
                alt="enghien06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien07}
                alt="enghien07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien08}
                alt="enghien08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien09}
                alt="enghien09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien10}
                alt="enghien10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien11}
                alt="enghien11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien12}
                alt="enghien12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien13}
                alt="enghien13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien14}
                alt="enghien14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien15}
                alt="enghien15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien16}
                alt="enghien16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien17}
                alt="enghien17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien18}
                alt="enghien18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien19}
                alt="enghien19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien20}
                alt="enghien20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien21}
                alt="enghien21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien22}
                alt="enghien22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien23}
                alt="enghien23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien24}
                alt="enghien24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien25}
                alt="enghien25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien26}
                alt="enghien26"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien27}
                alt="enghien27"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={enghien28}
                alt="enghien28"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien29}
                alt="enghien29"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={enghien30}
                alt="enghien30"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={enghien31}
                alt="enghien31"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Enghien;

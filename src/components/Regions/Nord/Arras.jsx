import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import arras from "../../../img/arras/arras01.jpg";
import arras2 from "../../../img/arras/arras02.jpg";
import arras3 from "../../../img/arras/arras03.jpg";
import arras4 from "../../../img/arras/arras04.jpg";
import arras5 from "../../../img/arras/arras05.jpg";
import arras6 from "../../../img/arras/arras06.jpg";
import arras7 from "../../../img/arras/arras07.jpg";
import arras8 from "../../../img/arras/arras08.jpg";
import arras9 from "../../../img/arras/arras09.jpg";
import arras10 from "../../../img/arras/arras10.jpg";
import arras11 from "../../../img/arras/arras11.jpg";
import arras12 from "../../../img/arras/arras12.jpg";
import arras13 from "../../../img/arras/arras13.jpg";
import arras14 from "../../../img/arras/arras14.jpg";
import arras15 from "../../../img/arras/arras15.jpg";
import arras16 from "../../../img/arras/arras16.jpg";
import arras17 from "../../../img/arras/arras17.jpg";
import arras18 from "../../../img/arras/arras18.jpg";
import arras19 from "../../../img/arras/arras19.jpg";
import arras20 from "../../../img/arras/arras20.jpg";
import arras21 from "../../../img/arras/arras21.jpg";
import arras22 from "../../../img/arras/arras22.jpg";

class Arras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Arras",
      image: "arras01.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "1 050 m",
      region: "Hauts-de-France",
      departement: "Pas-de-Calais",
      ville: "Arras",
      surnom: "hippodrome des Hauts-Blancs-Monts"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Arras Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/arras"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={arras}
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
                src={arras2}
                alt="arras02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras3}
                alt="arras03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras4}
                alt="arras04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras5}
                alt="arras05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras6}
                alt="arras06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras7}
                alt="arras07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras8}
                alt="arras08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras9}
                alt="arras09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras10}
                alt="arras10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras11}
                alt="arras11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras12}
                alt="arras12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras13}
                alt="arras13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras14}
                alt="arras14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras15}
                alt="arras15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras16}
                alt="arras16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras17}
                alt="arras17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras18}
                alt="arras18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras19}
                alt="arras19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={arras20}
                alt="arras20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={arras21}
                alt="arras21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={arras22}
                alt="arras22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Arras;

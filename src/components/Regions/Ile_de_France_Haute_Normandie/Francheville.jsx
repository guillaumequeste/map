import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import francheville01 from "../../../img/francheville/francheville01.jpg";
import francheville02 from "../../../img/francheville/francheville02.jpg";
import francheville03 from "../../../img/francheville/francheville03.jpg";
import francheville04 from "../../../img/francheville/francheville04.jpg";
import francheville05 from "../../../img/francheville/francheville05.jpg";
import francheville06 from "../../../img/francheville/francheville06.jpg";
import francheville07 from "../../../img/francheville/francheville07.jpg";
import francheville08 from "../../../img/francheville/francheville08.jpg";
import francheville09 from "../../../img/francheville/francheville09.jpg";
import francheville10 from "../../../img/francheville/francheville10.jpg";
import francheville11 from "../../../img/francheville/francheville11.jpg";
import francheville12 from "../../../img/francheville/francheville12.jpg";
import francheville13 from "../../../img/francheville/francheville13.jpg";
import francheville14 from "../../../img/francheville/francheville14.jpg";
import francheville15 from "../../../img/francheville/francheville15.jpg";
import francheville16 from "../../../img/francheville/francheville16.jpg";
import francheville17 from "../../../img/francheville/francheville17.jpg";
import francheville18 from "../../../img/francheville/francheville18.jpg";
import francheville19 from "../../../img/francheville/francheville19.jpg";
import francheville20 from "../../../img/francheville/francheville20.jpg";
import francheville21 from "../../../img/francheville/francheville21.jpg";
import francheville22 from "../../../img/francheville/francheville22.jpg";
import francheville23 from "../../../img/francheville/francheville23.jpg";
import francheville24 from "../../../img/francheville/francheville24.jpg";
import francheville25 from "../../../img/francheville/francheville25.jpg";
import francheville26 from "../../../img/francheville/francheville26.jpg";
import francheville27 from "../../../img/francheville/francheville27.jpg";
import francheville28 from "../../../img/francheville/francheville28.jpg";
import francheville29 from "../../../img/francheville/francheville29.jpg";
import francheville30 from "../../../img/francheville/francheville30.jpg";
import francheville31 from "../../../img/francheville/francheville31.jpg";
import francheville32 from "../../../img/francheville/francheville32.jpg";
import francheville33 from "../../../img/francheville/francheville33.jpg";
import francheville34 from "../../../img/francheville/francheville34.jpg";
import francheville35 from "../../../img/francheville/francheville35.jpg";

class Francheville extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Francheville-la Barre",
      image: "francheville01.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "1 125 m",
      region: "Haute-Normandie",
      departement: "Eure",
      ville: "Mandres",
      surnom: "hippodrome Georges Pinsard"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Francheville-la Barre Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/francheville"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={francheville01}
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
                src={francheville02}
                alt="francheville02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville03}
                alt="francheville03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={francheville04}
                alt="francheville04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville05}
                alt="francheville05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={francheville06}
                alt="francheville06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville07}
                alt="francheville07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={francheville08}
                alt="francheville08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville09}
                alt="francheville09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={francheville10}
                alt="francheville10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville11}
                alt="francheville11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville12}
                alt="francheville12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville13}
                alt="francheville13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville14}
                alt="francheville14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville15}
                alt="francheville15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville16}
                alt="francheville16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville17}
                alt="francheville17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville18}
                alt="francheville18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville19}
                alt="francheville19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville20}
                alt="francheville20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville21}
                alt="francheville21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville22}
                alt="francheville22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville23}
                alt="francheville23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville24}
                alt="francheville24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville25}
                alt="francheville25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville26}
                alt="francheville26"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville27}
                alt="francheville27"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville28}
                alt="francheville28"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville29}
                alt="francheville29"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville30}
                alt="francheville30"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville31}
                alt="francheville31"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville32}
                alt="francheville32"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville33}
                alt="francheville33"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={francheville34}
                alt="francheville34"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={francheville35}
                alt="francheville35"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Francheville;

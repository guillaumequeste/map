import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import granville01 from "../../../img/granville/granville01.jpg";
import granville02 from "../../../img/granville/granville02.jpg";
import granville03 from "../../../img/granville/granville03.jpg";
import granville04 from "../../../img/granville/granville04.jpg";
import granville05 from "../../../img/granville/granville05.jpg";
import granville06 from "../../../img/granville/granville06.jpg";
import granville07 from "../../../img/granville/granville07.jpg";
import granville08 from "../../../img/granville/granville08.jpg";
import granville09 from "../../../img/granville/granville09.jpg";
import granville10 from "../../../img/granville/granville10.jpg";
import granville11 from "../../../img/granville/granville11.jpg";
import granville12 from "../../../img/granville/granville12.jpg";
import granville13 from "../../../img/granville/granville13.jpg";
import granville14 from "../../../img/granville/granville14.jpg";
import granville15 from "../../../img/granville/granville15.jpg";
import granville16 from "../../../img/granville/granville16.jpg";
import granville17 from "../../../img/granville/granville17.jpg";
import granville18 from "../../../img/granville/granville18.jpg";
import granville19 from "../../../img/granville/granville19.jpg";
import granville20 from "../../../img/granville/granville20.jpg";
import granville21 from "../../../img/granville/granville21.jpg";
import granville22 from "../../../img/granville/granville22.jpg";
import granville23 from "../../../img/granville/granville23.jpg";
import granville24 from "../../../img/granville/granville24.jpg";
import granville25 from "../../../img/granville/granville25.jpg";
import granville26 from "../../../img/granville/granville26.jpg";
import granville27 from "../../../img/granville/granville27.jpg";
import granville28 from "../../../img/granville/granville28.jpg";
import granville29 from "../../../img/granville/granville29.jpg";

class Granville extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Granville",
      image: "granville01.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "1 400 m",
      region: "Basse-Normandie",
      departement: "Manche",
      ville: "Granville",
      surnom: "hippodrome de Longueville-Bréville"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Granville Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/granville"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={granville01}
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
                src={granville02}
                alt="granville02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville03}
                alt="granville03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={granville04}
                alt="granville04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville05}
                alt="granville05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={granville06}
                alt="granville06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville07}
                alt="granville07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={granville08}
                alt="granville08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville09}
                alt="granville09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={granville10}
                alt="granville10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville11}
                alt="granville11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={granville12}
                alt="granville12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville13}
                alt="granville13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={granville14}
                alt="granville14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville15}
                alt="granville15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={granville16}
                alt="granville16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville17}
                alt="granville17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={granville18}
                alt="granville18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville19}
                alt="granville19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={granville20}
                alt="granville20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville21}
                alt="granville21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={granville22}
                alt="granville22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville23}
                alt="granville23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={granville24}
                alt="granville24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville25}
                alt="granville25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={granville26}
                alt="granville26"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville27}
                alt="granville27"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={granville28}
                alt="granville28"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={granville29}
                alt="granville29"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Granville;

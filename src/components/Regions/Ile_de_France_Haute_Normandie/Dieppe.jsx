import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import dieppe from "../../../img/dieppe/dieppe.jpg";
import dieppe2 from "../../../img/dieppe/dieppe2.jpg";
import dieppe3 from "../../../img/dieppe/dieppe3.jpg";
import dieppe4 from "../../../img/dieppe/dieppe4.jpg";
import dieppe5 from "../../../img/dieppe/dieppe5.jpg";
import dieppe6 from "../../../img/dieppe/dieppe6.jpg";
import dieppe7 from "../../../img/dieppe/dieppe7.jpg";
import dieppe8 from "../../../img/dieppe/dieppe8.jpg";
import dieppe9 from "../../../img/dieppe/dieppe9.jpg";
import dieppe10 from "../../../img/dieppe/dieppe10.jpg";
import dieppe11 from "../../../img/dieppe/dieppe11.jpg";
import dieppe12 from "../../../img/dieppe/dieppe12.jpg";
import dieppe13 from "../../../img/dieppe/dieppe13.jpg";
import dieppe14 from "../../../img/dieppe/dieppe14.jpg";
import dieppe15 from "../../../img/dieppe/dieppe15.jpg";
import dieppe16 from "../../../img/dieppe/dieppe16.jpg";
import dieppe17 from "../../../img/dieppe/dieppe17.jpg";
import dieppe18 from "../../../img/dieppe/dieppe18.jpg";
import dieppe19 from "../../../img/dieppe/dieppe19.jpg";
import dieppe20 from "../../../img/dieppe/dieppe20.jpg";
import dieppe21 from "../../../img/dieppe/dieppe21.jpg";
import dieppe22 from "../../../img/dieppe/dieppe22.jpg";
import dieppe23 from "../../../img/dieppe/dieppe23.jpg";
import dieppe24 from "../../../img/dieppe/dieppe24.jpg";
import dieppe25 from "../../../img/dieppe/dieppe25.jpg";
import dieppe26 from "../../../img/dieppe/dieppe26.jpg";

class Dieppe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Dieppe",
      image: "dieppe.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "2 000 m",
      region: "Haute-Normandie",
      departement: "Seine-Maritime",
      ville: "Dieppe",
      surnom: "hippodrome de Rouxmesnil-Bouteilles"
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
              src={dieppe}
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
                src={dieppe2}
                alt="dieppe2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe3}
                alt="dieppe3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe4}
                alt="dieppe4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe5}
                alt="dieppe5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe6}
                alt="dieppe6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe7}
                alt="dieppe7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe8}
                alt="dieppe8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe9}
                alt="dieppe9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe10}
                alt="dieppe10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe11}
                alt="dieppe11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe12}
                alt="dieppe12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe13}
                alt="dieppe13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe14}
                alt="dieppe14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe15}
                alt="dieppe15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe16}
                alt="dieppe16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe17}
                alt="dieppe17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe18}
                alt="dieppe18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe19}
                alt="dieppe19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe20}
                alt="dieppe20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe21}
                alt="dieppe21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe22}
                alt="dieppe22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe23}
                alt="dieppe23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dieppe24}
                alt="dieppe24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dieppe25}
                alt="dieppe25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="photoLarge">
          <Zoom>
            <div className="imageLarge">
              <img
                src={dieppe26}
                alt="dieppe26"
                className="tailleImageLarge"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Dieppe;

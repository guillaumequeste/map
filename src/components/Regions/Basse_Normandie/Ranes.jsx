import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import ranes from "../../../img/ranes/ranes.jpg";
import ranes2 from "../../../img/ranes/ranes2.jpg";
import ranes3 from "../../../img/ranes/ranes3.jpg";
import ranes4 from "../../../img/ranes/ranes4.jpg";
import ranes5 from "../../../img/ranes/ranes5.jpg";
import ranes6 from "../../../img/ranes/ranes6.jpg";
import ranes7 from "../../../img/ranes/ranes7.jpg";
import ranes8 from "../../../img/ranes/ranes8.jpg";
import ranes9 from "../../../img/ranes/ranes9.jpg";
import ranes10 from "../../../img/ranes/ranes10.jpg";
import ranes11 from "../../../img/ranes/ranes11.jpg";
import ranes12 from "../../../img/ranes/ranes12.jpg";
import ranes13 from "../../../img/ranes/ranes13.jpg";
import ranes14 from "../../../img/ranes/ranes14.jpg";
import ranes15 from "../../../img/ranes/ranes15.jpg";

class Ranes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Rânes",
      image: "ranes.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "1 055 m",
      region: "Basse-Normandie",
      departement: "Orne",
      ville: "Argentan",
      surnom: "hippodrome de Rânes"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Rânes Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/ranes"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={ranes}
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
                src={ranes2}
                alt="ranes2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={ranes3}
                alt="ranes3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={ranes4}
                alt="ranes4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={ranes5}
                alt="ranes5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={ranes6}
                alt="ranes6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={ranes7}
                alt="ranes7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={ranes8}
                alt="ranes8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={ranes9}
                alt="ranes9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={ranes10}
                alt="ranes10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={ranes11}
                alt="ranes11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={ranes12}
                alt="ranes12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={ranes13}
                alt="ranes13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={ranes14}
                alt="ranes14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={ranes15}
                alt="ranes15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Ranes;

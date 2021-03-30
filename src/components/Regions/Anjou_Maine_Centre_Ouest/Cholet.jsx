import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import cholet from "../../../img/cholet/cholet.jpg";
import cholet2 from "../../../img/cholet/cholet2.jpg";
import cholet3 from "../../../img/cholet/cholet3.jpg";
import cholet4 from "../../../img/cholet/cholet4.jpg";
import cholet5 from "../../../img/cholet/cholet5.jpg";
import cholet6 from "../../../img/cholet/cholet6.jpg";
import cholet7 from "../../../img/cholet/cholet7.jpg";
import cholet8 from "../../../img/cholet/cholet8.jpg";
import cholet9 from "../../../img/cholet/cholet9.jpg";
import cholet10 from "../../../img/cholet/cholet10.jpg";
import cholet11 from "../../../img/cholet/cholet11.jpg";
import cholet12 from "../../../img/cholet/cholet12.jpg";
import cholet13 from "../../../img/cholet/cholet13.jpg";
import cholet14 from "../../../img/cholet/cholet14.jpg";
import cholet15 from "../../../img/cholet/cholet15.jpg";
import cholet16 from "../../../img/cholet/cholet16.jpg";
import cholet17 from "../../../img/cholet/cholet17.jpg";

class Cholet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Cholet",
      image: "cholet.jpg",
      piste: "herbe et sable",
      corde: "droite",
      circonference: "1 613 m",
      region: "Pays de la Loire",
      departement: "Maine-et-Loire",
      ville: "Cholet",
      surnom: "hippodrome de Clénet"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Cholet Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/cholet"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={cholet}
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
                src={cholet2}
                alt="cholet2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cholet3}
                alt="cholet3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cholet4}
                alt="cholet4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cholet5}
                alt="cholet5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cholet6}
                alt="cholet6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cholet7}
                alt="cholet7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cholet8}
                alt="cholet8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cholet9}
                alt="cholet9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cholet10}
                alt="cholet10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cholet11}
                alt="cholet11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cholet12}
                alt="cholet12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cholet13}
                alt="cholet13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cholet14}
                alt="cholet14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cholet15}
                alt="cholet15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={cholet16}
                alt="cholet16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cholet17}
                alt="cholet17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Cholet;

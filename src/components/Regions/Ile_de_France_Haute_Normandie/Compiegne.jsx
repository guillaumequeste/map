import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";

import compiegne from "../../../img/compiegne/compiegne.jpg";
import compiegne2 from "../../../img/compiegne/compiegne2.jpg";
import compiegne3 from "../../../img/compiegne/compiegne3.jpg";
import compiegne4 from "../../../img/compiegne/compiegne4.jpg";
import compiegne5 from "../../../img/compiegne/compiegne5.jpg";
import compiegne6 from "../../../img/compiegne/compiegne6.jpg";
import compiegne7 from "../../../img/compiegne/compiegne7.jpg";
import compiegne8 from "../../../img/compiegne/compiegne8.jpg";
import compiegne9 from "../../../img/compiegne/compiegne9.jpg";
import compiegne10 from "../../../img/compiegne/compiegne10.jpg";
import compiegne11 from "../../../img/compiegne/compiegne11.jpg";
import compiegne12 from "../../../img/compiegne/compiegne12.jpg";
import compiegne13 from "../../../img/compiegne/compiegne13.jpg";
import compiegne14 from "../../../img/compiegne/compiegne14.jpg";
import compiegne15 from "../../../img/compiegne/compiegne15.jpg";
import compiegne16 from "../../../img/compiegne/compiegne16.jpg";
import compiegne17 from "../../../img/compiegne/compiegne17.jpg";
import compiegne18 from "../../../img/compiegne/compiegne18.jpg";
import compiegne19 from "../../../img/compiegne/compiegne19.jpg";

class Compiegne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Compiegne",
      image: "compiegne.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "2 200 m",
      region: "Hauts-de-France",
      departement: "Oise",
      ville: "Compiègne",
      surnom: "hippodrome du Putois"
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
              src={compiegne}
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
                src={compiegne2}
                alt="compiegne2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne3}
                alt="compiegne3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={compiegne4}
                alt="compiegne4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne5}
                alt="compiegne5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={compiegne6}
                alt="compiegne6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne7}
                alt="compiegne7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={compiegne8}
                alt="compiegne8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne9}
                alt="compiegne9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={compiegne10}
                alt="compiegne10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne11}
                alt="compiegne11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={compiegne12}
                alt="compiegne12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne13}
                alt="compiegne13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={compiegne14}
                alt="compiegne14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne15}
                alt="compiegne15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={compiegne16}
                alt="compiegne16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne17}
                alt="compiegne17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={compiegne18}
                alt="compiegne18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={compiegne19}
                alt="compiegne19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Compiegne;

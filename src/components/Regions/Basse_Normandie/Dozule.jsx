import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import dozule from "../../../img/dozule/dozule.jpg";
import dozule2 from "../../../img/dozule/dozule2.jpg";
import dozule3 from "../../../img/dozule/dozule3.jpg";
import dozule4 from "../../../img/dozule/dozule4.jpg";
import dozule5 from "../../../img/dozule/dozule5.jpg";
import dozule6 from "../../../img/dozule/dozule6.jpg";
import dozule7 from "../../../img/dozule/dozule7.jpg";
import dozule8 from "../../../img/dozule/dozule8.jpg";
import dozule9 from "../../../img/dozule/dozule9.jpg";
import dozule10 from "../../../img/dozule/dozule10.jpg";
import dozule11 from "../../../img/dozule/dozule11.jpg";
import dozule12 from "../../../img/dozule/dozule12.jpg";
import dozule13 from "../../../img/dozule/dozule13.jpg";
import dozule14 from "../../../img/dozule/dozule14.jpg";
import dozule15 from "../../../img/dozule/dozule15.jpg";
import dozule16 from "../../../img/dozule/dozule16.jpg";
import dozule17 from "../../../img/dozule/dozule17.jpg";
import dozule18 from "../../../img/dozule/dozule18.jpg";
import dozule19 from "../../../img/dozule/dozule19.jpg";
import dozule20 from "../../../img/dozule/dozule20.jpg";
import dozule21 from "../../../img/dozule/dozule21.jpg";

class Dozule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Dozulé",
      image: "dozule.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "1 075 m",
      region: "Basse-Normandie",
      departement: "Calvados",
      ville: "Dozulé",
      surnom: "hippodrome de la Couperée"
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
              src={dozule}
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
                src={dozule2}
                alt="dozule2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule3}
                alt="dozule3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dozule4}
                alt="dozule4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule5}
                alt="dozule5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dozule6}
                alt="dozule6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule7}
                alt="dozule7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dozule8}
                alt="dozule8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule9}
                alt="dozule9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dozule10}
                alt="dozule10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule11}
                alt="dozule11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dozule12}
                alt="dozule12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule13}
                alt="dozule13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dozule14}
                alt="dozule14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule15}
                alt="dozule15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dozule16}
                alt="dozule16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule17}
                alt="dozule17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={dozule18}
                alt="dozule18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule19}
                alt="dozule19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={dozule20}
                alt="dozule20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={dozule21}
                alt="dozule21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Dozule;

import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import bernay from "../../../img/bernay/bernay.jpg";
import bernay2 from "../../../img/bernay/bernay2.jpg";
import bernay3 from "../../../img/bernay/bernay3.jpg";
import bernay4 from "../../../img/bernay/bernay4.jpg";
import bernay5 from "../../../img/bernay/bernay5.jpg";
import bernay6 from "../../../img/bernay/bernay6.jpg";
import bernay7 from "../../../img/bernay/bernay7.jpg";
import bernay8 from "../../../img/bernay/bernay8.jpg";
import bernay9 from "../../../img/bernay/bernay9.jpg";
import bernay10 from "../../../img/bernay/bernay10.jpg";
import bernay11 from "../../../img/bernay/bernay11.jpg";
import bernay12 from "../../../img/bernay/bernay12.jpg";
import bernay13 from "../../../img/bernay/bernay13.jpg";
import bernay14 from "../../../img/bernay/bernay14.jpg";
import bernay15 from "../../../img/bernay/bernay15.jpg";
import bernay16 from "../../../img/bernay/bernay16.jpg";
import bernay17 from "../../../img/bernay/bernay17.jpg";
import bernay18 from "../../../img/bernay/bernay18.jpg";
import bernay19 from "../../../img/bernay/bernay19.jpg";

class Bernay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Bernay",
      image: "bernay.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "1 310 m",
      region: "Haute-Normandie",
      departement: "Eure",
      ville: "Bernay",
      surnom: "hippodrome Victor Lebrun"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Bernay Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/bernay"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={bernay}
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
                src={bernay2}
                alt="bernay2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay3}
                alt="bernay3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bernay4}
                alt="bernay4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay5}
                alt="bernay5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bernay6}
                alt="bernay6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay7}
                alt="bernay7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bernay8}
                alt="bernay8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay9}
                alt="bernay9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bernay10}
                alt="bernay10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay11}
                alt="bernay11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bernay12}
                alt="bernay12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay13}
                alt="bernay13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bernay14}
                alt="bernay14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay15}
                alt="bernay15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bernay16}
                alt="bernay16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay17}
                alt="bernay17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={bernay18}
                alt="bernay18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bernay19}
                alt="bernay19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Bernay;

import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import saint_aubin from "../../../img/saint_aubin/saint_aubin.jpg";
import saint_aubin2 from "../../../img/saint_aubin/saint_aubin2.jpg";
import saint_aubin3 from "../../../img/saint_aubin/saint_aubin3.jpg";
import saint_aubin4 from "../../../img/saint_aubin/saint_aubin4.jpg";
import saint_aubin5 from "../../../img/saint_aubin/saint_aubin5.jpg";
import saint_aubin6 from "../../../img/saint_aubin/saint_aubin6.jpg";
import saint_aubin7 from "../../../img/saint_aubin/saint_aubin7.jpg";
import saint_aubin8 from "../../../img/saint_aubin/saint_aubin8.jpg";
import saint_aubin9 from "../../../img/saint_aubin/saint_aubin9.jpg";
import saint_aubin10 from "../../../img/saint_aubin/saint_aubin10.jpg";
import saint_aubin11 from "../../../img/saint_aubin/saint_aubin11.jpg";
import saint_aubin12 from "../../../img/saint_aubin/saint_aubin12.jpg";
import saint_aubin13 from "../../../img/saint_aubin/saint_aubin13.jpg";
import saint_aubin14 from "../../../img/saint_aubin/saint_aubin14.jpg";
import saint_aubin15 from "../../../img/saint_aubin/saint_aubin15.jpg";
import saint_aubin16 from "../../../img/saint_aubin/saint_aubin16.jpg";
import saint_aubin17 from "../../../img/saint_aubin/saint_aubin17.jpg";

class Saint_Aubin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Saint-Aubin-lès-Elbeuf",
      image: "saint_aubin.jpg",
      piste: "sable",
      corde: "gauche",
      circonference: "1 000 m",
      region: "Haute-Normandie",
      departement: "Seine-Maritime",
      ville: "Rouen",
      surnom: "hippodrome des Brulins"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Saint-Aubin-lès-Elbeuf Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/saint-aubin"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={saint_aubin}
              alt={this.state.nom}
              className="tailleImage"
            />
          </div>
          <Roll right>
            <div className="description">
              <h2 className="titreCard long">{this.state.nom}</h2>
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
                src={saint_aubin2}
                alt="saint_aubin2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin3}
                alt="saint_aubin3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin4}
                alt="saint_aubin4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin5}
                alt="saint_aubin5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin6}
                alt="saint_aubin6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin7}
                alt="saint_aubin7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin8}
                alt="saint_aubin8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin9}
                alt="saint_aubin9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin10}
                alt="saint_aubin10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin11}
                alt="saint_aubin11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin12}
                alt="saint_aubin12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin13}
                alt="saint_aubin13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin14}
                alt="saint_aubin14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin15}
                alt="saint_aubin15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin16}
                alt="saint_aubin16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_aubin17}
                alt="saint_aubin17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Saint_Aubin;

import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import segre1 from "../../../img/segre/segre01.jpg";
import segre2 from "../../../img/segre/segre02.jpg";
import segre3 from "../../../img/segre/segre03.jpg";
import segre4 from "../../../img/segre/segre04.jpg";
import segre5 from "../../../img/segre/segre05.jpg";
import segre6 from "../../../img/segre/segre06.jpg";
import segre7 from "../../../img/segre/segre07.jpg";
import segre8 from "../../../img/segre/segre08.jpg";
import segre9 from "../../../img/segre/segre09.jpg";
import segre10 from "../../../img/segre/segre10.jpg";
import segre11 from "../../../img/segre/segre11.jpg";
import segre12 from "../../../img/segre/segre12.jpg";
import segre13 from "../../../img/segre/segre13.jpg";
import segre14 from "../../../img/segre/segre14.jpg";
import segre15 from "../../../img/segre/segre15.jpg";
import segre16 from "../../../img/segre/segre16.jpg";
import segre17 from "../../../img/segre/segre17.jpg";
import segre18 from "../../../img/segre/segre18.jpg";
import segre19 from "../../../img/segre/segre19.jpg";
import segre20 from "../../../img/segre/segre20.jpg";
import segre21 from "../../../img/segre/segre21.jpg";
import segre22 from "../../../img/segre/segre22.jpg";
import segre23 from "../../../img/segre/segre23.jpg";
import segre24 from "../../../img/segre/segre24.jpg";
import segre25 from "../../../img/segre/segre25.jpg";
import segre26 from "../../../img/segre/segre26.jpg";
import segre27 from "../../../img/segre/segre27.jpg";
import segre28 from "../../../img/segre/segre28.jpg";
import segre29 from "../../../img/segre/segre29.jpg";

class Segre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Segré",
      image: "segre01.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "1 200 m",
      region: "Pays de la Loire",
      departement: "Maine-et-Loire",
      ville: "Segré",
      surnom: "hippodrome de la Lorie"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Segré Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/segre"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={segre1}
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
                src={segre2}
                alt="segre2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre3}
                alt="segre3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre4}
                alt="segre4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre5}
                alt="segre5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre6}
                alt="segre6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre7}
                alt="segre7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre8}
                alt="segre8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre9}
                alt="segre9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre10}
                alt="segre10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre11}
                alt="segre11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre12}
                alt="segre12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre13}
                alt="segre13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre14}
                alt="segre14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre15}
                alt="segre15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre16}
                alt="segre16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre17}
                alt="segre17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre18}
                alt="segre18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre19}
                alt="segre19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre20}
                alt="segre20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre21}
                alt="segre21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre22}
                alt="segre22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre23}
                alt="segre23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre24}
                alt="segre24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre25}
                alt="segre25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={segre26}
                alt="segre26"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre27}
                alt="segre27"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={segre28}
                alt="segre28"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={segre29}
                alt="segre29"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Segre;

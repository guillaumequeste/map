import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import longchamp from "../../../img/longchamp/longchamp.jpg";
import longchamp2 from "../../../img/longchamp/longchamp2.jpg";
import longchamp3 from "../../../img/longchamp/longchamp3.jpg";
import longchamp4 from "../../../img/longchamp/longchamp4.jpg";
import longchamp5 from "../../../img/longchamp/longchamp5.jpg";
import longchamp6 from "../../../img/longchamp/longchamp6.jpg";
import longchamp7 from "../../../img/longchamp/longchamp7.jpg";
import longchamp8 from "../../../img/longchamp/longchamp8.jpg";
import longchamp9 from "../../../img/longchamp/longchamp9.jpg";
import longchamp10 from "../../../img/longchamp/longchamp10.jpg";
import longchamp11 from "../../../img/longchamp/longchamp11.jpg";
import longchamp12 from "../../../img/longchamp/longchamp12.jpg";
import longchamp13 from "../../../img/longchamp/longchamp13.jpg";
import longchamp14 from "../../../img/longchamp/longchamp14.jpg";
import longchamp15 from "../../../img/longchamp/longchamp15.jpg";
import longchamp16 from "../../../img/longchamp/longchamp16.jpg";
import longchamp17 from "../../../img/longchamp/longchamp17.jpg";
import longchamp18 from "../../../img/longchamp/longchamp18.jpg";
import longchamp19 from "../../../img/longchamp/longchamp19.jpg";
import longchamp20 from "../../../img/longchamp/longchamp20.jpg";
import longchamp21 from "../../../img/longchamp/longchamp21.jpg";
import longchamp22 from "../../../img/longchamp/longchamp22.jpg";
import longchamp23 from "../../../img/longchamp/longchamp23.jpg";
import longchamp24 from "../../../img/longchamp/longchamp24.jpg";
import longchamp25 from "../../../img/longchamp/longchamp25.jpg";
import longchamp26 from "../../../img/longchamp/longchamp26.jpg";
import longchamp27 from "../../../img/longchamp/longchamp27.jpg";
import longchamp28 from "../../../img/longchamp/longchamp28.jpg";
import longchamp29 from "../../../img/longchamp/longchamp29.jpg";
import longchamp30 from "../../../img/longchamp/longchamp30.jpg";
import longchamp31 from "../../../img/longchamp/longchamp31.jpg";
import longchamp32 from "../../../img/longchamp/longchamp32.jpg";
import longchamp33 from "../../../img/longchamp/longchamp33.jpg";
import longchamp34 from "../../../img/longchamp/longchamp34.jpg";
import longchamp35 from "../../../img/longchamp/longchamp35.jpg";

class Longchamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Longchamp",
      image: "longchamp.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "2 500 m",
      region: "Ile de France",
      departement: "Paris 16ème",
      ville: "Paris",
      surnom: "hippodrome de Longchamp"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Longchamp Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/longchamp"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={longchamp}
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
                src={longchamp2}
                alt="longchamp2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp3}
                alt="longchamp3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp4}
                alt="longchamp4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp5}
                alt="longchamp5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp6}
                alt="longchamp6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp7}
                alt="longchamp7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp8}
                alt="longchamp8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp9}
                alt="longchamp9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp10}
                alt="longchamp10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp11}
                alt="longchamp11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp12}
                alt="longchamp12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp13}
                alt="longchamp13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp14}
                alt="longchamp14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp15}
                alt="longchamp15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp16}
                alt="longchamp16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp17}
                alt="longchamp17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp18}
                alt="longchamp18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp19}
                alt="longchamp19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp20}
                alt="longchamp20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp21}
                alt="longchamp21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp22}
                alt="longchamp22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp23}
                alt="longchamp23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp24}
                alt="longchamp24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp25}
                alt="longchamp25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp26}
                alt="longchamp26"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp27}
                alt="longchamp27"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp28}
                alt="longchamp28"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp29}
                alt="longchamp29"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp30}
                alt="longchamp30"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp31}
                alt="longchamp31"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={longchamp32}
                alt="longchamp32"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp33}
                alt="longchamp33"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={longchamp34}
                alt="longchamp34"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={longchamp35}
                alt="longchamp35"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Longchamp;

import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import strasbourg from "../../../img/strasbourg/strasbourg.jpg";
import strasbourg2 from "../../../img/strasbourg/strasbourg2.jpg";
import strasbourg3 from "../../../img/strasbourg/strasbourg3.jpg";
import strasbourg4 from "../../../img/strasbourg/strasbourg4.jpg";
import strasbourg5 from "../../../img/strasbourg/strasbourg5.jpg";
import strasbourg6 from "../../../img/strasbourg/strasbourg6.jpg";
import strasbourg7 from "../../../img/strasbourg/strasbourg7.jpg";
import strasbourg8 from "../../../img/strasbourg/strasbourg8.jpg";
import strasbourg9 from "../../../img/strasbourg/strasbourg9.jpg";
import strasbourg10 from "../../../img/strasbourg/strasbourg10.jpg";
import strasbourg11 from "../../../img/strasbourg/strasbourg11.jpg";
import strasbourg12 from "../../../img/strasbourg/strasbourg12.jpg";
import strasbourg13 from "../../../img/strasbourg/strasbourg13.jpg";
import strasbourg14 from "../../../img/strasbourg/strasbourg14.jpg";
import strasbourg15 from "../../../img/strasbourg/strasbourg15.jpg";
import strasbourg16 from "../../../img/strasbourg/strasbourg16.jpg";
import strasbourg17 from "../../../img/strasbourg/strasbourg17.jpg";
import strasbourg18 from "../../../img/strasbourg/strasbourg18.jpg";
import strasbourg19 from "../../../img/strasbourg/strasbourg19.jpg";
import strasbourg20 from "../../../img/strasbourg/strasbourg20.jpg";
import strasbourg21 from "../../../img/strasbourg/strasbourg21.jpg";

class Strasbourg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Strasbourg",
      image: "strasbourg.jpg",
      piste: "herbe et mâchefer",
      corde: "droite",
      circonference: "1 800 m",
      region: "Grand Est",
      departement: "Bas-Rhin",
      ville: "Strasbourg",
      surnom: "hippodrome de Strasbourg-Hoerdt"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Strasbourg Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/strasbourg"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={strasbourg}
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
                src={strasbourg2}
                alt="strasbourg2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg3}
                alt="strasbourg3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg4}
                alt="strasbourg4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg5}
                alt="strasbourg5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg6}
                alt="strasbourg6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg7}
                alt="strasbourg7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg8}
                alt="strasbourg8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg9}
                alt="strasbourg9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg10}
                alt="strasbourg10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg11}
                alt="strasbourg11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg12}
                alt="strasbourg12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg13}
                alt="strasbourg13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg14}
                alt="strasbourg14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg15}
                alt="strasbourg15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg16}
                alt="strasbourg16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg17}
                alt="strasbourg17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg18}
                alt="strasbourg18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg19}
                alt="strasbourg19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={strasbourg20}
                alt="strasbourg20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={strasbourg21}
                alt="strasbourg21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Strasbourg;

import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import vire from "../../../img/vire/vire.jpg";
import vire2 from "../../../img/vire/vire2.jpg";
import vire3 from "../../../img/vire/vire3.jpg";
import vire4 from "../../../img/vire/vire4.jpg";
import vire5 from "../../../img/vire/vire5.jpg";
import vire6 from "../../../img/vire/vire6.jpg";
import vire7 from "../../../img/vire/vire7.jpg";
import vire8 from "../../../img/vire/vire8.jpg";
import vire9 from "../../../img/vire/vire9.jpg";
import vire10 from "../../../img/vire/vire10.jpg";
import vire11 from "../../../img/vire/vire11.jpg";
import vire12 from "../../../img/vire/vire12.jpg";
import vire13 from "../../../img/vire/vire13.jpg";
import vire14 from "../../../img/vire/vire14.jpg";
import vire15 from "../../../img/vire/vire15.jpg";
import vire16 from "../../../img/vire/vire16.jpg";
import vire17 from "../../../img/vire/vire17.jpg";
import vire18 from "../../../img/vire/vire18.jpg";
import vire19 from "../../../img/vire/vire19.jpg";
import vire20 from "../../../img/vire/vire20.jpg";
import vire21 from "../../../img/vire/vire21.jpg";
import vire22 from "../../../img/vire/vire22.jpg";
import vire23 from "../../../img/vire/vire23.jpg";
import vire24 from "../../../img/vire/vire24.jpg";
import vire25 from "../../../img/vire/vire25.jpg";

class Vire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Vire",
      image: "vire.jpg",
      piste: "herbe et sable",
      corde: "droite",
      circonference: "1 425 m",
      region: "Basse-Normandie",
      departement: "Calvados",
      ville: "Vire",
      surnom: "hippodrome Robert-Auvray"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Vire Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/vire"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={vire}
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
                src={vire2}
                alt="vire2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire3}
                alt="vire3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire4}
                alt="vire4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire5}
                alt="vire5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire6}
                alt="vire6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire7}
                alt="vire7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire8}
                alt="vire8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire9}
                alt="vire9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire10}
                alt="vire10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire11}
                alt="vire11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire12}
                alt="vire12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire13}
                alt="vire13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire14}
                alt="vire14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire15}
                alt="vire15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire16}
                alt="vire16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire17}
                alt="vire17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire18}
                alt="vire18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire19}
                alt="vire19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire20}
                alt="vire20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire21}
                alt="vire21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={vire22}
                alt="vire22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire23}
                alt="vire23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={vire24}
                alt="vire24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={vire25}
                alt="vire25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Vire;

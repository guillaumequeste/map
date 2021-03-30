import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import bacqueville from "../../../img/bacqueville/bacqueville.jpg";
import bacqueville2 from "../../../img/bacqueville/bacqueville2.jpg";
import bacqueville3 from "../../../img/bacqueville/bacqueville3.jpg";
import bacqueville4 from "../../../img/bacqueville/bacqueville4.jpg";
import bacqueville5 from "../../../img/bacqueville/bacqueville5.jpg";
import bacqueville6 from "../../../img/bacqueville/bacqueville6.jpg";
import bacqueville7 from "../../../img/bacqueville/bacqueville7.jpg";
import bacqueville8 from "../../../img/bacqueville/bacqueville8.jpg";
import bacqueville9 from "../../../img/bacqueville/bacqueville9.jpg";
import bacqueville10 from "../../../img/bacqueville/bacqueville10.jpg";
import bacqueville11 from "../../../img/bacqueville/bacqueville11.jpg";
import bacqueville12 from "../../../img/bacqueville/bacqueville12.jpg";
import bacqueville13 from "../../../img/bacqueville/bacqueville13.jpg";
import bacqueville14 from "../../../img/bacqueville/bacqueville14.jpg";
import bacqueville15 from "../../../img/bacqueville/bacqueville15.jpg";
import bacqueville16 from "../../../img/bacqueville/bacqueville16.jpg";
import bacqueville17 from "../../../img/bacqueville/bacqueville17.jpg";
import bacqueville18 from "../../../img/bacqueville/bacqueville18.jpg";
import bacqueville19 from "../../../img/bacqueville/bacqueville19.jpg";

class Bacqueville extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Bacqueville-en-Caux",
      image: "bacqueville.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "950 m",
      region: "Haute-Normandie",
      departement: "Seine-maritime",
      ville: "Bacqueville-en-Caux",
      surnom: "hippodrome de Pierreville"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Bacqueville en Caux Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/bacqueville"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={bacqueville}
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
                src={bacqueville2}
                alt="bacqueville2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville3}
                alt="bacqueville3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bacqueville4}
                alt="bacqueville4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville5}
                alt="bacqueville5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bacqueville6}
                alt="bacqueville6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville7}
                alt="bacqueville7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bacqueville8}
                alt="bacqueville8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville9}
                alt="bacqueville9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bacqueville10}
                alt="bacqueville10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville11}
                alt="bacqueville11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bacqueville12}
                alt="bacqueville12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville13}
                alt="bacqueville13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bacqueville14}
                alt="bacqueville14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville15}
                alt="bacqueville15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={bacqueville16}
                alt="bacqueville16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville17}
                alt="bacqueville17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={bacqueville18}
                alt="bacqueville18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={bacqueville19}
                alt="bacqueville19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Bacqueville;

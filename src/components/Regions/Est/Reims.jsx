import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import reims from "../../../img/reims/reims.jpg";
import reims2 from "../../../img/reims/reims2.jpg";
import reims3 from "../../../img/reims/reims3.jpg";
import reims4 from "../../../img/reims/reims4.jpg";
import reims5 from "../../../img/reims/reims5.jpg";
import reims6 from "../../../img/reims/reims6.jpg";
import reims7 from "../../../img/reims/reims7.jpg";
import reims8 from "../../../img/reims/reims8.jpg";
import reims9 from "../../../img/reims/reims9.jpg";
import reims10 from "../../../img/reims/reims10.jpg";
import reims11 from "../../../img/reims/reims11.jpg";
import reims12 from "../../../img/reims/reims12.jpg";
import reims13 from "../../../img/reims/reims13.jpg";
import reims14 from "../../../img/reims/reims14.jpg";
import reims15 from "../../../img/reims/reims15.jpg";
import reims16 from "../../../img/reims/reims16.jpg";
import reims17 from "../../../img/reims/reims17.jpg";
import reims18 from "../../../img/reims/reims18.jpg";
import reims19 from "../../../img/reims/reims19.jpg";

class Reims extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Reims",
      image: "reims.jpg",
      piste: "sable",
      corde: "droite",
      circonference: "1 156 m",
      region: "Grand Est",
      departement: "Marne",
      ville: "Reims",
      surnom: "hippodrome de la Champagne"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Reims Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/reims"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={reims}
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
                src={reims2}
                alt="reims2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims3}
                alt="reims3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={reims4}
                alt="reims4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims5}
                alt="reims5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={reims6}
                alt="reims6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims7}
                alt="reims7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={reims8}
                alt="reims8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims9}
                alt="reims9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={reims10}
                alt="reims10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims11}
                alt="reims11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={reims12}
                alt="reims12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims13}
                alt="reims13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={reims14}
                alt="reims14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims15}
                alt="reims15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={reims16}
                alt="reims16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims17}
                alt="reims17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={reims18}
                alt="reims18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={reims19}
                alt="reims19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Reims;

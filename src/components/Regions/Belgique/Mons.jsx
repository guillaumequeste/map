import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import mons from "../../../img/mons/mons.jpg";
import mons2 from "../../../img/mons/mons2.jpg";
import mons3 from "../../../img/mons/mons3.jpg";
import mons4 from "../../../img/mons/mons4.jpg";
import mons5 from "../../../img/mons/mons5.jpg";
import mons6 from "../../../img/mons/mons6.jpg";
import mons7 from "../../../img/mons/mons7.jpg";
import mons8 from "../../../img/mons/mons8.jpg";
import mons9 from "../../../img/mons/mons9.jpg";
import mons10 from "../../../img/mons/mons10.jpg";
import mons11 from "../../../img/mons/mons11.jpg";
import mons12 from "../../../img/mons/mons12.jpg";
import mons13 from "../../../img/mons/mons13.jpg";
import mons14 from "../../../img/mons/mons14.jpg";
import mons15 from "../../../img/mons/mons15.jpg";
import mons16 from "../../../img/mons/mons16.jpg";
import mons17 from "../../../img/mons/mons17.jpg";
import mons18 from "../../../img/mons/mons18.jpg";
import mons19 from "../../../img/mons/mons19.jpg";

class Mons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Mons",
      image: "mons.jpg",
      piste: "PSF et sable de Mouen",
      corde: "gauche",
      circonference: "1 345 m",
      region: "Belgique",
      departement: "Wallonie",
      ville: "Mons-Ghlin",
      surnom: "hippodrome de Wallonie"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Mons Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/mons"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={mons}
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
                src={mons2}
                alt="mons2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons3}
                alt="mons3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mons4}
                alt="mons4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons5}
                alt="mons5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mons6}
                alt="mons6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons7}
                alt="mons7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mons8}
                alt="mons8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons9}
                alt="mons9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mons10}
                alt="mons10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons11}
                alt="mons11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mons12}
                alt="mons12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons13}
                alt="mons13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mons14}
                alt="mons14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons15}
                alt="mons15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mons16}
                alt="mons16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons17}
                alt="mons17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={mons18}
                alt="mons18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mons19}
                alt="mons19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Mons;

import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import gournay from "../../../img/gournay/gournay.jpg";
import gournay2 from "../../../img/gournay/gournay2.jpg";
import gournay3 from "../../../img/gournay/gournay3.jpg";
import gournay4 from "../../../img/gournay/gournay4.jpg";
import gournay5 from "../../../img/gournay/gournay5.jpg";
import gournay6 from "../../../img/gournay/gournay6.jpg";
import gournay7 from "../../../img/gournay/gournay7.jpg";
import gournay8 from "../../../img/gournay/gournay8.jpg";
import gournay9 from "../../../img/gournay/gournay9.jpg";
import gournay10 from "../../../img/gournay/gournay10.jpg";
import gournay11 from "../../../img/gournay/gournay11.jpg";
import gournay12 from "../../../img/gournay/gournay12.jpg";
import gournay13 from "../../../img/gournay/gournay13.jpg";
import gournay14 from "../../../img/gournay/gournay14.jpg";
import gournay15 from "../../../img/gournay/gournay15.jpg";
import gournay16 from "../../../img/gournay/gournay16.jpg";
import gournay17 from "../../../img/gournay/gournay17.jpg";
import gournay18 from "../../../img/gournay/gournay18.jpg";
import gournay19 from "../../../img/gournay/gournay19.jpg";

class Gournay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Gournay en Bray",
      image: "gournay.jpg",
      piste: "mâchefer",
      corde: "droite",
      circonference: "1 000 m",
      region: "Haute-Normandie",
      departement: "Seine-maritime",
      ville: "Forges-les-Eaux",
      surnom: "hippodrome du Mont Louvet"
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
              src={gournay}
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
                src={gournay2}
                alt="gournay2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={gournay3}
                alt="gournay3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={gournay4}
                alt="gournay4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={gournay5}
                alt="gournay5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={gournay6}
                alt="gournay6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={gournay7}
                alt="gournay7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={gournay8}
                alt="gournay8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={gournay9}
                alt="gournay9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={gournay10}
                alt="gournay10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={gournay11}
                alt="gournay11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={gournay12}
                alt="gournay12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={gournay13}
                alt="gournay13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={gournay14}
                alt="gournay14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={gournay15}
                alt="gournay15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={gournay16}
                alt="gournay16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
               src={gournay17}
                alt="gournay17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={gournay18}
                alt="gournay18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={gournay19}
                alt="gournay19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Gournay;

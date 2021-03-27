import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import craon from "../../../img/craon/craon.jpg";
import craon2 from "../../../img/craon/craon2.jpg";
import craon3 from "../../../img/craon/craon3.jpg";
import craon4 from "../../../img/craon/craon4.jpg";
import craon5 from "../../../img/craon/craon5.jpg";
import craon6 from "../../../img/craon/craon6.jpg";
import craon7 from "../../../img/craon/craon7.jpg";
import craon8 from "../../../img/craon/craon8.jpg";
import craon9 from "../../../img/craon/craon9.jpg";
import craon10 from "../../../img/craon/craon10.jpg";
import craon11 from "../../../img/craon/craon11.jpg";
import craon12 from "../../../img/craon/craon12.jpg";
import craon13 from "../../../img/craon/craon13.jpg";
import craon14 from "../../../img/craon/craon14.jpg";
import craon15 from "../../../img/craon/craon15.jpg";
import craon16 from "../../../img/craon/craon16.jpg";
import craon17 from "../../../img/craon/craon17.jpg";
import craon18 from "../../../img/craon/craon18.jpg";
import craon19 from "../../../img/craon/craon19.jpg";
import craon20 from "../../../img/craon/craon20.jpg";
import craon21 from "../../../img/craon/craon21.jpg";
import craon22 from "../../../img/craon/craon22.jpg";
import craon23 from "../../../img/craon/craon23.jpg";
import craon24 from "../../../img/craon/craon24.jpg";
import craon25 from "../../../img/craon/craon25.jpg";
import craon26 from "../../../img/craon/craon26.jpg";
import craon27 from "../../../img/craon/craon27.jpg";
import craon28 from "../../../img/craon/craon28.jpg";
import craon29 from "../../../img/craon/craon29.jpg";
import craon30 from "../../../img/craon/craon30.jpg";
import craon31 from "../../../img/craon/craon31.jpg";
import craon32 from "../../../img/craon/craon32.jpg";
import craon33 from "../../../img/craon/craon33.jpg";
import craon34 from "../../../img/craon/craon34.jpg";
import craon35 from "../../../img/craon/craon35.jpg";
import craon36 from "../../../img/craon/craon36.jpg";
import craon37 from "../../../img/craon/craon37.jpg";

class Craon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Craon",
      image: "craon.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "2 000 m",
      region: "Pays de la Loire",
      departement: "Mayenne",
      ville: "Craon",
      surnom: "hippodrome de la Touche"
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
              src={craon}
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
                src={craon2}
                alt="craon2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon3}
                alt="craon3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon4}
                alt="craon4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon5}
                alt="craon5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon6}
                alt="craon6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon7}
                alt="craon7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon8}
                alt="craon8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon9}
                alt="craon9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon10}
                alt="craon10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon11}
                alt="craon11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon12}
                alt="craon12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon13}
                alt="craon13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon14}
                alt="craon14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon15}
                alt="craon15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon16}
                alt="craon16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon17}
                alt="craon17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon18}
                alt="craon18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon19}
                alt="craon19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon20}
                alt="craon20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon21}
                alt="craon21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon22}
                alt="craon22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon23}
                alt="craon23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon24}
                alt="craon24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon25}
                alt="craon25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon26}
                alt="craon26"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon27}
                alt="craon27"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon28}
                alt="craon28"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon29}
                alt="craon29"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon30}
                alt="craon30"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon31}
                alt="craon31"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon32}
                alt="craon32"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon33}
                alt="craon33"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={craon34}
                alt="craon34"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon35}
                alt="craon35"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={craon36}
                alt="craon36"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={craon37}
                alt="craon37"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Craon;

import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import abbevillemini from "../img/abbeville/abbevillemini.jpg";
import amiensmini from "../img/amiens/amiensmini.jpg";
import angersmini from "../img/angers/angersmini.jpg";
import argentanmini from "../img/argentan/argentanmini.jpg";
import arrasmini from "../img/arras/arras01min.jpg";
import auteuilmini from "../img/auteuil/auteuilmini.jpg";
import bacquevillemini from "../img/bacqueville/bacquevillemini.jpg";
import bernaymini from "../img/bernay/bernaymini.jpg";
import bihorelmini from "../img/bihorel/bihorelmini.jpg";
import cabourgmini from "../img/cabourg/cabourgmini.jpg";
import caenmini from "../img/caen/caenmini.jpg";
import chantillymini from "../img/chantilly/chantillymini.jpg";
import chartresmini from "../img/chartres/chartresmini.jpg";
import choletmini from "../img/cholet/choletmini.jpg";
import clairefontainemini from "../img/clairefontaine/clairefontainemini.jpg";
import compiegnemini from "../img/compiegne/compiegnemini.jpg";
import craonmini from "../img/craon/craonmini.jpg";
import deauville01min from "../img/deauville/deauville01min.jpg";
import dieppemini from "../img/dieppe/dieppemini.jpg";
import dozulemini from "../img/dozule/dozulemini.jpg";
import enghienmini from "../img/enghien/enghienmini.jpg";
import evreuxmini from "../img/evreux/evreuxmini.jpg";
import fontainebleaumini from "../img/fontainebleau/fontainebleaumini.jpg";
import gournaymini from "../img/gournay/gournaymini.jpg";
import graignesmini from "../img/graignes/graignesmini.jpg";
import la_capellemini from "../img/la_capelle/la_capellemini.jpg";
import la_ferte_vidame01min from "../img/la_ferte-vidame/la_ferte-vidame01min.jpg";
import lavalmini from "../img/laval/lavalmini.jpg";
import le_croisemini from "../img/le_croise/le_croisemini.jpg";
import le_lionmini from "../img/le_lion/le_lionmini.jpg";
import le_montmini from "../img/le_mont/le_montmini.jpg";
import le_neubourgmini from "../img/le_neubourg/le_neubourgmini.jpg";
import le_touquetmini from "../img/le_touquet/le_touquetmini.jpg";
import les_andelys01min from "../img/les_andelys/les_andelys01min.jpg";
import lisieux01min from "../img/lisieux/lisieux01min.jpg";
import longchampmini from "../img/longchamp/longchampmini.jpg";
import maisons_laffittemini from "../img/maisons_laffitte/maisons_laffittemini.jpg";
import mauquenchymini from "../img/mauquenchy/mauquenchymini.jpg";
import maure_de_bretagnemini from "../img/maure_de_bretagne/maure_de_bretagnemini.jpg";
import meslaymini from "../img/meslay/meslaymini.jpg";
import monsmini from "../img/mons/monsmini.jpg";
import nantesmini from "../img/nantes/nantesmini.jpg";
import rambouillet01min from "../img/rambouillet/rambouillet01min.jpg";
import ranesmini from "../img/ranes/ranesmini.jpg";
import reimsmini from "../img/reims/reimsmini.jpg";
import saint_aubinmini from "../img/saint_aubin/saint_aubinmini.jpg";
import saint_cloudmini from "../img/saint-cloud/saint-cloudmini.jpg";
import saint_malomini from "../img/saint-malo/saint-malomini.jpg";
import saint_omermini from "../img/saint-omer/saint-omermini.jpg";
import saint_pierre_sur_divesmini from "../img/saint-pierre-sur-dives/saint-pierre-sur-divesmini.jpg";
import strasbourgmini from "../img/strasbourg/strasbourgmini.jpg";
import vincennesmini from "../img/vincennes/vincennesmini.jpg";
import viremini from "../img/vire/viremini.jpg";

export default class CarteHippodromes extends Component {
  state = {
    lat: 49.5,
    lng: 2,
    zoom: 5
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const abbeville = [50.0915, 1.8184099999999717];
    const amiens = [49.893904380381564, 2.2694657325744174];
    const angers = [47.4944796, -0.5072976];
    const argentan = [48.75395, 0.0014978];
    const arras = [50.29358383886521, 2.737261885372093];
    const auteuil = [48.85357949565165, 2.2576086105700597];
    const bacqueville = [49.789944562691666, 1.0040160319636016];
    const bernay = [49.082567, 0.6087611];
    const bihorel = [49.4586393, 1.1191943];
    const cabourg = [49.2772449, -0.1206713];
    const caen = [49.1751767, -0.3708798];
    const chantilly = [49.191308512779045, 2.476100773826829];
    const chartres = [48.45142594687998, 1.5097389577942977];
    const cholet = [47.019964436493304, -0.8890111313643274];
    const clairefontaine = [49.34605710683897, 0.056583603759463585];
    const compiegne = [49.4061428, 2.8454586];
    const craon = [47.83661575840418, -0.9337280247314084];
    const deauville = [49.35414777153358, 0.08030336143792738];
    const dieppe = [49.910237035930365, 1.0937288990112393];
    const dozule = [49.24287385707446, -0.03681992937163159];
    const enghien = [48.9799237, 2.2922579];
    const evreux = [49.00912812880299, 1.1131200226011515];
    const fontainebleau = [48.43465286377009, 2.6845060226629585];
    const gournay_en_bray = [49.50269418157618, 1.669992652499559];
    const graignes = [49.24099402100886, -1.2082318585732992];
    const la_capelle = [49.96745788709066, 3.9210740150385845];
    const la_ferte_vidame = [48.62214998449914, 0.8945448696612912];
    const laval = [48.03654876550867, -0.79427457057011];
    const le_croise = [50.66740342836, 3.0933489234778335];
    const le_lion = [47.627642154779075, -0.7068720211182153];
    const le_mont = [48.58435089492097, -1.5140505370483197];
    const le_neubourg = [49.137763376553714, 0.9030580304107616];
    const le_touquet = [50.52455181672819, 1.6080518874526888];
    const les_andelys = [49.22882191348012, 1.3766622735461054];
    const lisieux = [49.15063276625466, 0.27103529970133877];
    const longchamp = [48.85996009473326, 2.234109026859869];
    const maisons_laffitte = [48.95595111865754, 2.170992717490435];
    const mauquenchy = [49.58952406322148, 1.4538518019471667];
    const maure_de_bretagne = [47.89119140176784, -2.0226686087036114];
    const meslay = [47.95002087997146, -0.5331800724213736];
    const mons = [50.48137807649974, 3.925027224786845];
    const nantes = [47.2467314, -1.5667671];
    const rambouillet = [48.63768294022566, 1.854044368875729];
    const ranes = [48.64199474697866, -0.2168726719970664];
    const reims = [49.23425248548578, 4.011013589935374];
    const saint_aubin = [49.30849696355618, 1.020071769866945];
    const saint_cloud = [48.857875921915365, 2.203160397551642];
    const saint_malo = [48.6427010279671, -1.998111407655415];
    const saint_omer = [50.7268006139747, 2.237274716949514];
    const saint_pierre_sur_dives = [49.014937553296704, -0.04520430461991509];
    const strasbourg = [48.68451691328222, 7.789386643819171];
    const vincennes = [48.8242715410014, 2.451797900881729];
    const vire = [48.85061391062303, -0.8991070195434077];

    return (
      <div className="bodyMap">
        <div className="map">
          <h1 className="titreCarte">53 hippodromes visités</h1>
          <MapContainer center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={abbeville}>
              <Popup minWidth={200}>
                <Link to="/abbeville" className="linkHippodrome">
                  <div className="lien">
                    <div>Abbeville</div>
                    <div>
                      <img
                        src={abbevillemini}
                        alt="abbeville"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={amiens}>
              <Popup>
                <Link to="/amiens" className="linkHippodrome">
                  <div className="lien">
                    <div>Amiens</div>
                    <div>
                      <img src={amiensmini} alt="amiens" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={angers}>
              <Popup>
                <Link to="/angers" className="linkHippodrome">
                  <div className="lien">
                    <div>Angers</div>
                    <div>
                      <img src={angersmini} alt="angers" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={argentan}>
              <Popup>
                <Link to="/argentan" className="linkHippodrome">
                  <div className="lien">
                    <div>Argentan</div>
                    <div>
                      <img
                        src={argentanmini}
                        alt="argentan"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={arras}>
              <Popup>
                <Link to="/arras" className="linkHippodrome">
                  <div className="lien">
                    <div>Arras</div>
                    <div>
                      <img src={arrasmini} alt="arras" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={auteuil}>
              <Popup>
                <Link to="/auteuil" className="linkHippodrome">
                  <div className="lien">
                    <div>Auteuil</div>
                    <div>
                      <img src={auteuilmini} alt="auteuil" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={bacqueville}>
              <Popup>
                <Link to="/bacqueville_en_caux" className="linkHippodrome">
                  <div className="lien">
                    <div>Bacqueville-en-Caux</div>
                    <div>
                      <img
                        src={bacquevillemini}
                        alt="bacqueville"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={bernay}>
              <Popup>
                <Link to="/bernay" className="linkHippodrome">
                  <div className="lien">
                    <div>Bernay</div>
                    <div>
                      <img src={bernaymini} alt="bernay" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={bihorel}>
              <Popup>
                <Link to="/bihorel" className="linkHippodrome">
                  <div className="lien">
                    <div>Bihorel</div>
                    <div>
                      <img src={bihorelmini} alt="bihorel" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={cabourg}>
              <Popup>
                <Link to="/cabourg" className="linkHippodrome">
                  <div className="lien">
                    <div>Cabourg</div>
                    <div>
                      <img src={cabourgmini} alt="cabourg" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={caen}>
              <Popup>
                <Link to="/caen" className="linkHippodrome">
                  <div className="lien">
                    <div>Caen</div>
                    <div>
                      <img src={caenmini} alt="caen" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={chantilly}>
              <Popup>
                <Link to="/chantilly" className="linkHippodrome">
                  <div className="lien">
                    <div>Chantilly</div>
                    <div>
                      <img
                        src={chantillymini}
                        alt="chantilly"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={chartres}>
              <Popup>
                <Link to="/chartres" className="linkHippodrome">
                  <div className="lien">
                    <div>Chartres</div>
                    <div>
                      <img
                        src={chartresmini}
                        alt="chartres"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={cholet}>
              <Popup>
                <Link to="/cholet" className="linkHippodrome">
                  <div className="lien">
                    <div>Cholet</div>
                    <div>
                      <img src={choletmini} alt="cholet" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={clairefontaine}>
              <Popup>
                <Link to="/clairefontaine" className="linkHippodrome">
                  <div className="lien">
                    <div>Clairefontaine</div>
                    <div>
                      <img
                        src={clairefontainemini}
                        alt="clairefontaine"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={compiegne}>
              <Popup>
                <Link to="/compiegne" className="linkHippodrome">
                  <div className="lien">
                    <div>Compiègne</div>
                    <div>
                      <img
                        src={compiegnemini}
                        alt="compiegne"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={craon}>
              <Popup>
                <Link to="/craon" className="linkHippodrome">
                  <div className="lien">
                    <div>Craon</div>
                    <div>
                      <img src={craonmini} alt="craon" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={deauville}>
              <Popup>
                <Link to="/deauville" className="linkHippodrome">
                  <div className="lien">
                    <div>Deauville</div>
                    <div>
                      <img
                        src={deauville01min}
                        alt="deauville"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={dieppe}>
              <Popup>
                <Link to="/dieppe" className="linkHippodrome">
                  <div className="lien">
                    <div>Dieppe</div>
                    <div>
                      <img src={dieppemini} alt="dieppe" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={dozule}>
              <Popup>
                <Link to="/dozule" className="linkHippodrome">
                  <div className="lien">
                    <div>Dozulé</div>
                    <div>
                      <img src={dozulemini} alt="dozule" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={enghien}>
              <Popup>
                <Link to="/enghien" className="linkHippodrome">
                  <div className="lien">
                    <div>Enghien</div>
                    <div>
                      <img src={enghienmini} alt="enghien" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={evreux}>
              <Popup>
                <Link to="/evreux" className="linkHippodrome">
                  <div className="lien">
                    <div>Evreux</div>
                    <div>
                      <img src={evreuxmini} alt="evreux" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={fontainebleau}>
              <Popup>
                <Link to="/fontainebleau" className="linkHippodrome">
                  <div className="lien">
                    <div>Fontainebleau</div>
                    <div>
                      <img
                        src={fontainebleaumini}
                        alt="fontainebleau"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={gournay_en_bray}>
              <Popup>
                <Link to="/gournay" className="linkHippodrome">
                  <div className="lien">
                    <div>Gournay en Bray</div>
                    <div>
                      <img
                        src={gournaymini}
                        alt="gournay_en_bray"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={graignes}>
              <Popup>
                <Link to="/graignes" className="linkHippodrome">
                  <div className="lien">
                    <div>Graignes</div>
                    <div>
                      <img
                        src={graignesmini}
                        alt="graignes"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={la_capelle}>
              <Popup>
                <Link to="/la_capelle" className="linkHippodrome">
                  <div className="lien">
                    <div>La Capelle</div>
                    <div>
                      <img
                        src={la_capellemini}
                        alt="la_capelle"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={la_ferte_vidame}>
              <Popup>
                <Link to="/la_ferte-vidame" className="linkHippodrome">
                  <div className="lien">
                    <div>La Ferté-Vidame</div>
                    <div>
                      <img
                        src={la_ferte_vidame01min}
                        alt="la_ferte-vidame"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={laval}>
              <Popup>
                <Link to="/laval" className="linkHippodrome">
                  <div className="lien">
                    <div>Laval</div>
                    <div>
                      <img src={lavalmini} alt="laval" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={le_croise}>
              <Popup>
                <Link to="/le_croise" className="linkHippodrome">
                  <div className="lien">
                    <div>Le Croisé Laroche</div>
                    <div>
                      <img
                        src={le_croisemini}
                        alt="le_croise_laroche"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={le_lion}>
              <Popup>
                <Link to="/le_lion" className="linkHippodrome">
                  <div className="lien">
                    <div>Le Lion d Angers</div>
                    <div>
                      <img
                        src={le_lionmini}
                        alt="le_lion_d_angers"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={le_mont}>
              <Popup>
                <Link to="/le_mont" className="linkHippodrome">
                  <div className="lien">
                    <div>Le Mont-Saint-Michel</div>
                    <div>
                      <img
                        src={le_montmini}
                        alt="le_mont_saint_michel"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={le_neubourg}>
              <Popup>
                <Link to="/le_neubourg" className="linkHippodrome">
                  <div className="lien">
                    <div>Le Neubourg</div>
                    <div>
                      <img
                        src={le_neubourgmini}
                        alt="le_neubourg"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={le_touquet}>
              <Popup>
                <Link to="/le_touquet" className="linkHippodrome">
                  <div className="lien">
                    <div>Le Touquet</div>
                    <div>
                      <img
                        src={le_touquetmini}
                        alt="le_touquet"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={les_andelys}>
              <Popup>
                <Link to="/les_andelys" className="linkHippodrome">
                  <div className="lien">
                    <div>Les Andelys</div>
                    <div>
                      <img
                        src={les_andelys01min}
                        alt="les_andelys"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={lisieux}>
              <Popup>
                <Link to="/lisieux" className="linkHippodrome">
                  <div className="lien">
                    <div>Lisieux</div>
                    <div>
                      <img
                        src={lisieux01min}
                        alt="lisieux"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={longchamp}>
              <Popup>
                <Link to="/longchamp" className="linkHippodrome">
                  <div className="lien">
                    <div>Longchamp</div>
                    <div>
                      <img
                        src={longchampmini}
                        alt="longchamp"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={maisons_laffitte}>
              <Popup>
                <Link to="/maisons_laffitte" className="linkHippodrome">
                  <div className="lien">
                    <div>Maisons-Laffitte</div>
                    <div>
                      <img
                        src={maisons_laffittemini}
                        alt="maisons_laffitte"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={mauquenchy}>
              <Popup>
                <Link to="/mauquenchy" className="linkHippodrome">
                  <div className="lien">
                    <div>Mauquenchy</div>
                    <div>
                      <img
                        src={mauquenchymini}
                        alt="mauquenchy"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={maure_de_bretagne}>
              <Popup>
                <Link to="/maure_de_bretagne" className="linkHippodrome">
                  <div className="lien">
                    <div>Maure de Bretagne</div>
                    <div>
                      <img
                        src={maure_de_bretagnemini}
                        alt="maure_de_bretagne"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={meslay}>
              <Popup>
                <Link to="/meslay" className="linkHippodrome">
                  <div className="lien">
                    <div>Meslay-du-Maine</div>
                    <div>
                      <img
                        src={meslaymini}
                        alt="meslay_du_maine"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={mons}>
              <Popup>
                <Link to="/mons" className="linkHippodrome">
                  <div className="lien">
                    <div>Mons</div>
                    <div>
                      <img src={monsmini} alt="mons" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={nantes}>
              <Popup>
                <Link to="/nantes" className="linkHippodrome">
                  <div className="lien">
                    <div>Nantes</div>
                    <div>
                      <img src={nantesmini} alt="nantes" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={rambouillet}>
              <Popup>
                <Link to="/rambouillet" className="linkHippodrome">
                  <div className="lien">
                    <div>Rambouillet</div>
                    <div>
                      <img
                        src={rambouillet01min}
                        alt="rambouillet"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={ranes}>
              <Popup>
                <Link to="/ranes" className="linkHippodrome">
                  <div className="lien">
                    <div>Rânes</div>
                    <div>
                      <img src={ranesmini} alt="ranes" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={reims}>
              <Popup>
                <Link to="/reims" className="linkHippodrome">
                  <div className="lien">
                    <div>Reims</div>
                    <div>
                      <img src={reimsmini} alt="reims" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={saint_aubin}>
              <Popup>
                <Link to="/saint_aubin" className="linkHippodrome">
                  <div className="lien">
                    <div>Saint-Aubin-lès-Elbeuf</div>
                    <div>
                      <img
                        src={saint_aubinmini}
                        alt="saint_aubin_les_elbeuf"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={saint_cloud}>
              <Popup>
                <Link to="/saint-cloud" className="linkHippodrome">
                  <div className="lien">
                    <div>Saint-Cloud</div>
                    <div>
                      <img
                        src={saint_cloudmini}
                        alt="saint-cloud"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={saint_malo}>
              <Popup>
                <Link to="/saint-malo" className="linkHippodrome">
                  <div className="lien">
                    <div>Saint-Malo</div>
                    <div>
                      <img
                        src={saint_malomini}
                        alt="saint-malo"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={saint_omer}>
              <Popup>
                <Link to="/saint-omer" className="linkHippodrome">
                  <div className="lien">
                    <div>Saint-Omer</div>
                    <div>
                      <img
                        src={saint_omermini}
                        alt="saint-omer"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={saint_pierre_sur_dives}>
              <Popup>
                <Link to="/saint-pierre-sur-dives" className="linkHippodrome">
                  <div className="lien">
                    <div>Saint-Pierre-sur-Dives</div>
                    <div>
                      <img
                        src={saint_pierre_sur_divesmini}
                        alt="saint-pierre-sur-dives"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={strasbourg}>
              <Popup>
                <Link to="/strasbourg" className="linkHippodrome">
                  <div className="lien">
                    <div>Strasbourg</div>
                    <div>
                      <img
                        src={strasbourgmini}
                        alt="strasbourg"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={vincennes}>
              <Popup>
                <Link to="/vincennes" className="linkHippodrome">
                  <div className="lien">
                    <div>Vincennes</div>
                    <div>
                      <img
                        src={vincennesmini}
                        alt="vincennes"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={vire}>
              <Popup>
                <Link to="/vire" className="linkHippodrome">
                  <div className="lien">
                    <div>Vire</div>
                    <div>
                      <img
                        src={viremini}
                        alt="vire"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  }
}

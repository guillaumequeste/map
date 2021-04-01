import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

/* Nord */
import Accueil_Nord from './components/Regions/Nord/Accueil_Nord'
import Abbeville from './components/Regions/Nord/Abbeville'
import Amiens from './components/Regions/Nord/Amiens'
import Arras from './components/Regions/Nord/Arras'
import La_Capelle from './components/Regions/Nord/La_Capelle'
import Le_Croise from './components/Regions/Nord/Le_Croise'
import Le_Touquet from './components/Regions/Nord/Le_Touquet'
import Saint_Omer from './components/Regions/Nord/Saint_Omer'

/* Basse-Normandie */
import Accueil_Basse_Normandie from './components/Regions/Basse_Normandie/Accueil_Basse_Normandie'
import Argentan from './components/Regions/Basse_Normandie/Argentan'
import Cabourg from './components/Regions/Basse_Normandie/Cabourg'
import Caen from './components/Regions/Basse_Normandie/Caen'
import Clairefontaine from './components/Regions/Basse_Normandie/Clairefontaine'
import Deauville from './components/Regions/Basse_Normandie/Deauville'
import Dozule from './components/Regions/Basse_Normandie/Dozule'
import Graignes from './components/Regions/Basse_Normandie/Graignes'
import Le_Mont from './components/Regions/Basse_Normandie/Le_Mont'
import Lisieux from './components/Regions/Basse_Normandie/Lisieux'
import Ranes from './components/Regions/Basse_Normandie/Ranes'
import Saint_Pierre_sur_Dives from './components/Regions/Basse_Normandie/Saint_Pierre_sur_Dives'
import Vire from './components/Regions/Basse_Normandie/Vire'

/* Ile-de-France & Haute-Normandie */
import Accueil_Paris_Haute_Normandie from './components/Regions/Ile_de_France_Haute_Normandie/Accueil_Paris_Haute_Normandie'
import Auteuil from './components/Regions/Ile_de_France_Haute_Normandie/Auteuil'
import Bacqueville from './components/Regions/Ile_de_France_Haute_Normandie/Bacqueville'
import Bernay from './components/Regions/Ile_de_France_Haute_Normandie/Bernay'
import Bihorel from './components/Regions/Ile_de_France_Haute_Normandie/Bihorel'
import Chantilly from './components/Regions/Ile_de_France_Haute_Normandie/Chantilly'
import Chartres from './components/Regions/Ile_de_France_Haute_Normandie/Chartres'
import Compiegne from './components/Regions/Ile_de_France_Haute_Normandie/Compiegne'
import Dieppe from './components/Regions/Ile_de_France_Haute_Normandie/Dieppe'
import Enghien from './components/Regions/Ile_de_France_Haute_Normandie/Enghien'
import Evreux from './components/Regions/Ile_de_France_Haute_Normandie/Evreux'
import Fontainebleau from './components/Regions/Ile_de_France_Haute_Normandie/Fontainebleau'
import Gournay from './components/Regions/Ile_de_France_Haute_Normandie/Gournay'
import La_Ferte_Vidame from './components/Regions/Ile_de_France_Haute_Normandie/La_Ferte_Vidame'
import Le_Neubourg from './components/Regions/Ile_de_France_Haute_Normandie/Le_Neubourg'
import Les_Andelys from './components/Regions/Ile_de_France_Haute_Normandie/Les_Andelys'
import Longchamp from './components/Regions/Ile_de_France_Haute_Normandie/Longchamp'
import Maisons_Laffitte from './components/Regions/Ile_de_France_Haute_Normandie/Maisons_Laffitte'
import Mauquenchy from './components/Regions/Ile_de_France_Haute_Normandie/Mauquenchy'
import Rambouillet from './components/Regions/Ile_de_France_Haute_Normandie/Rambouillet'
import Saint_Aubin from './components/Regions/Ile_de_France_Haute_Normandie/Saint_Aubin'
import Saint_Cloud from './components/Regions/Ile_de_France_Haute_Normandie/Saint_Cloud'
import Vincennes from './components/Regions/Ile_de_France_Haute_Normandie/Vincennes'

/* Anjou-Maine-Centre-Ouest */
import Accueil_Anjou_Maine_Centre_Ouest from './components/Regions/Anjou_Maine_Centre_Ouest/Accueil_Anjou_Maine_Centre_Ouest'
import Angers from './components/Regions/Anjou_Maine_Centre_Ouest/Angers'
import Cholet from './components/Regions/Anjou_Maine_Centre_Ouest/Cholet'
import Craon from './components/Regions/Anjou_Maine_Centre_Ouest/Craon'
import Laval from './components/Regions/Anjou_Maine_Centre_Ouest/Laval'
import Le_Lion from './components/Regions/Anjou_Maine_Centre_Ouest/Le_Lion'
import Meslay from './components/Regions/Anjou_Maine_Centre_Ouest/Meslay'

/* Ouest */
import Accueil_Ouest from './components/Regions/Ouest/Accueil_Ouest'
import Maure_de_Bretagne from './components/Regions/Ouest/Maure_de_Bretagne'
import Nantes from './components/Regions/Ouest/Nantes'
import Saint_Malo from './components/Regions/Ouest/Saint_Malo'

/* Est */
import Accueil_Est from './components/Regions/Est/Accueil_Est'
import Reims from './components/Regions/Est/Reims'
import Strasbourg from './components/Regions/Est/Strasbourg'

/* Belgique */
import Accueil_Belgique from './components/Regions/Belgique/Accueil_Belgique'
import Mons from './components/Regions/Belgique/Mons'

import Regions from './components/Regions/Regions'
import Carte from './components/Carte'
import Liste from './components/Liste'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import ScrollToTop from './components/ScrollToTop'

const Root = () => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/nord' component={Accueil_Nord}/>
            <Route path='/abbeville' component={Abbeville}/>
            <Route path='/amiens' component={Amiens}/>
            <Route path='/arras' component={Arras}/>
            <Route path='/la_capelle' component={La_Capelle}/>
            <Route path='/le_croise' component={Le_Croise}/>
            <Route path='/le_touquet' component={Le_Touquet}/>
            <Route path='/saint-omer' component={Saint_Omer}/>

            <Route path='/basse-normandie' component={Accueil_Basse_Normandie}/>
            <Route path='/argentan' component={Argentan}/>
            <Route path='/cabourg' component={Cabourg}/>
            <Route path='/caen' component={Caen}/>
            <Route path='/clairefontaine' component={Clairefontaine}/>
            <Route path='/deauville' component={Deauville}/>
            <Route path='/dozule' component={Dozule}/>
            <Route path='/graignes' component={Graignes}/>
            <Route path='/le_mont' component={Le_Mont}/>
            <Route path='/lisieux' component={Lisieux}/>
            <Route path='/ranes' component={Ranes}/>
            <Route path='/saint-pierre-sur-dives' component={Saint_Pierre_sur_Dives}/>
            <Route path='/vire' component={Vire}/>

            <Route path='/paris_haute-normandie' component={Accueil_Paris_Haute_Normandie}/>
            <Route path='/auteuil' component={Auteuil}/>
            <Route path='/bacqueville_en_caux' component={Bacqueville}/>
            <Route path='/bernay' component={Bernay}/>
            <Route path='/bihorel' component={Bihorel}/>
            <Route path='/chantilly' component={Chantilly}/>
            <Route path='/chartres' component={Chartres}/>
            <Route path='/compiegne' component={Compiegne}/>
            <Route path='/dieppe' component={Dieppe}/>
            <Route path='/enghien' component={Enghien}/>
            <Route path='/evreux' component={Evreux}/>
            <Route path='/fontainebleau' component={Fontainebleau}/>
            <Route path='/gournay' component={Gournay}/>
            <Route path='/la_ferte-vidame' component={La_Ferte_Vidame}/>
            <Route path='/le_neubourg' component={Le_Neubourg}/>
            <Route path='/les_andelys' component={Les_Andelys}/>
            <Route path='/longchamp' component={Longchamp}/>
            <Route path='/maisons_laffitte' component={Maisons_Laffitte}/>
            <Route path='/mauquenchy' component={Mauquenchy}/>
            <Route path='/rambouillet' component={Rambouillet}/>
            <Route path='/saint_aubin' component={Saint_Aubin}/>
            <Route path='/saint-cloud' component={Saint_Cloud}/>
            <Route path='/vincennes' component={Vincennes}/>

            <Route path='/anjou_maine' component={Accueil_Anjou_Maine_Centre_Ouest}/>
            <Route path='/angers' component={Angers}/>
            <Route path='/cholet' component={Cholet}/>
            <Route path='/craon' component={Craon}/>
            <Route path='/laval' component={Laval}/>
            <Route path='/le_lion' component={Le_Lion}/>
            <Route path='/meslay' component={Meslay}/>

            <Route path='/ouest' component={Accueil_Ouest}/>
            <Route path='/maure_de_bretagne' component={Maure_de_Bretagne}/>
            <Route path='/nantes' component={Nantes}/>
            <Route path='/saint-malo' component={Saint_Malo}/>

            <Route path='/est' component={Accueil_Est}/>
            <Route path='/reims' component={Reims}/>
            <Route path='/strasbourg' component={Strasbourg}/>

            <Route path='/belgique' component={Accueil_Belgique}/>
            <Route path='/mons' component={Mons}/>

            <Route path='/regions' component={Regions}/>
            <Route path='/carte' component={Carte}/>
            <Route path='/liste' component={Liste}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/notfound' component={NotFound}/>
            <Redirect to="/notfound" />
        </Switch>
    </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

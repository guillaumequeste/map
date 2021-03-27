import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

/* Nord */
import Abbeville from './components/Regions/Nord/Abbeville'
import Amiens from './components/Regions/Nord/Amiens'
import Arras from './components/Regions/Nord/Arras'

/* Basse-Normandie */
import Argentan from './components/Regions/Basse_Normandie/Argentan'


/* Anjou-Maine-Centre-Ouest */
import Angers from './components/Regions/Anjou_Maine_Centre_Ouest/Angers'

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

            <Route path='/abbeville' component={Abbeville}/>
            <Route path='/amiens' component={Amiens}/>
            <Route path='/arras' component={Arras}/>

            <Route path='/argentan' component={Argentan}/>

            <Route path='/angers' component={Angers}/>

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

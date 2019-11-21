/*
* Routing: Presentational component
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Redirect } from 'react-router';

import App from '../../App'
import PokedexPage from '../../containers/PokedexPage'
import PokemonPage from '../../containers/PokemonPage'
import NotFound from './NotFound'

class Routing extends Component {
	render() {
		return ( 
		 	<Router>
                <Switch>
                    <Route exact path='/' component={PokedexPage}/>
                    <Route exact path='/pokedex' component={PokedexPage}/>
                    <Route path="/pokemon" component={PokemonPage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
		)
	}
}
export default (Routing);
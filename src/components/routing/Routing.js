/*
* Routing: Presentational component
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                    <Route path="/pokemon/:id" component={PokemonPage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
		)
	}
}
export default (Routing);
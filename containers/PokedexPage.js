import React from 'react';
import {connect} from 'react-redux';
import './PokedexPage.css';

import { updateSearchQueryAction, searchAction } from '../actions';
import { fetchPokemonsPending, fetchPokemonsSuccess, fetchPokemonsError } from '../actions';
import { fetchPokemonPending, fetchPokemonSuccess, fetchPokemonError } from '../actions';

import PokemonList from '../components/list/PokemonList';
import Header from '../components/header/Header';
import Filter from '../components/filter/Filter';
import Spinner from '../components/commons/Spinner';
import Banner from '../components/commons/Banner';
import Error from '../components/commons/Error';

class PokedexPage extends React.Component {

	constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);

      this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleUpdateSearchFilter = this.handleUpdateSearchFilter.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.handleResizePage = this.handleResizePage.bind(this);

      this.props.fetchPokemons()
  }

  shouldComponentRender() {
      const { state } = this.props
      const { pokemons } = state
      const { pending } = pokemons
      //console.log('shouldComponentRender '+pending)
      if (pending) {
        //console.log('COMPONENT SHOULD NOT RENDER')
        return false
      }
      else {
        //console.log('COMPONENT SHOULD RENDER')
        return true
      }
  }

  handleUpdateSearchQuery(query) {
    console.log('POKEDEX handleUpdateSearchQuery '+query)
    //this.props.updateSearchQuery(query)
    //this.props.search(query)
  }

  handleSearch(query) {
    this.props.actions.search(query)
  }

  handleUpdateSearchFilter(query) {
    console.log('POKEDEX handleUpdateSearchFilter')
    console.log(query)
    
  }

  handleFilter(filter) {
    console.log('POKEDEX handleFilter')
    console.log(filter)
    console.log(this.props)
  }

  handleResizePage(size) {
    console.log('POKEDEX handleResizePage')
    console.log(size)
    console.log(this.props)
  }

/*<Header 
              updateSearchQueryHandler={this.handleUpdateSearchQuery}
              searchHandler={this.handleSearch} 
              updateSearchFilterHandler={this.handleUpdateSearchFilter} 
              filterHandler={this.handleFilter}
              pageResizeHandler={this.handleResizePage}/>
              <PokemonList pokemons={pokemons}/>*/

/*
<div class='PokedexPage-content-wrapper'>
              <div className='PokedexPage-content'>
                <div className='PokedexPage-List-header'>
                  HEADER
                </div>
                <div className='PokedexPage-List-content'>
                    <PokemonList pokemons={pokemons}/>
                </div>
              </div>
            </div>*/
      
	render() {
    console.log('RENDER')
    const { state } = this.props
    const { pokemons } = state
    const { error, data } = pokemons
    
    if (this.shouldComponentRender()) {
      if (error) {
        return (<Error/>)
      }
      else {
        return (
          <div className="PokedexPage">
            <div className='PokedexPage-banner'>
                <Banner updateSearchQueryHandler={this.handleUpdateSearchQuery}/>
            </div>
            <div className='PokedexPage-content'>
                <div className='PokedexPage-content-wrapper'>
                  <Header/>
                </div>
            </div>
          </div>
        )
      }
    }
    else return (<Spinner/>)
  }
}

const mapStateToProps = state => ({ "state": state })

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: query => {dispatch(updateSearchQueryAction(query))},
  search: query => {dispatch(searchAction(query))},

  fetchPokemons: () => {
    dispatch(fetchPokemonsPending());
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(fetchPokemonsSuccess(res));
    })
    .catch (error => {
        dispatch(fetchPokemonsError(error));
    })
  },

  fetchPokemon: (url) => {
    console.log('fetchPokemon '+ url)
    dispatch(fetchPokemonPending());
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(fetchPokemonSuccess(res));
    })
    .catch (error => {
        dispatch(fetchPokemonError(error));
    })
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPage);
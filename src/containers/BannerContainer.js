import React from 'react';
import {connect} from 'react-redux';

import { fetchTypesPending, fetchTypesSuccess, fetchTypesError } from '../actions';
import { fetchMovesPending, fetchMovesSuccess, fetchMovesError } from '../actions';

import Banner from '../components/commons/Banner';
import Error from '../components/commons/Error';

class BannerContainer extends React.Component {

	constructor(props) {
      super(props);
      //this.shouldComponentRender = this.shouldComponentRender.bind(this);

      this.props.fetchTypes()
      this.props.fetchMoves()
      //this.props.fetchRegions()
  }

  shouldComponentRender() {
      const { state } = this.props
      const { types, moves, regions } = state
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
      
	render() {
    console.log('POKEDEX RENDER')
    const { state } = this.props
    console.log(state)

    const { types, pokemons } = state
    const { error, data } = pokemons
  
    if (this.shouldComponentRender()) {
      if (error) {
        return (<Error/>)
      }
      else {
        return (
          <div className="PokedexPage">
            <div className='PokedexPage-banner'>
                <Banner updateSearchQueryHandler={this.handleUpdateSearchQuery} />
            </div>
            <div className='PokedexPage-content'>
                <div className='PokedexPage-content-wrapper'>
                  <Header/>
                  <PokemonList pokemons={pokemons} showDetailHandler={this.handleShowDetail}/>
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

  fetchTypes: () => {
    dispatch(fetchTypesPending());
    fetch('https://pokeapi.co/api/v2/type')
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(fetchTypesSuccess(res));
    })
    .catch (error => {
        dispatch(fetchTypesError(error));
    })
  },

  fetchMoves: () => {
    dispatch(fetchMovesPending());
    fetch('https://pokeapi.co/api/v2/move')
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(fetchMovesSuccess(res));
    })
    .catch (error => {
        dispatch(fetchMovesError(error));
    })
  },


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

export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer);
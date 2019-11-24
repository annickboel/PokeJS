import React from 'react';
import {connect} from 'react-redux';
import './PokedexPage.css';
import * as action_creators from '../actions';
import * as urls from '../constants/Urls.js'
import PokemonList from '../components/list/PokemonList';
import Header from '../components/header/Header';
import Spinner from '../components/commons/Spinner';
import Banner from '../components/commons/Banner';
import Error from '../components/commons/Error';

class PokedexPage extends React.Component {

	constructor(props) {
      super(props);
      this.props.fetchTypes()
      this.props.fetchMoves()
      this.props.fetchRegions()
      this.props.fetchPokemons()
  
      this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleUpdateSearchFilter = this.handleUpdateSearchFilter.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.handleResizePage = this.handleResizePage.bind(this);
      this.handleShowDetail = this.handleShowDetail.bind(this);

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
  }

  handleShowDetail(id) {
    console.log('POKEDEX handleShowDetail '+id)
    const { state } = this.props;
    console.log(state)
    console.log(urls.API_POKEMON_PATH+id)
    this.props.history.push('/pokemon/'+id, state)
  }

render() {
    const { state } = this.props
    const { filter, pokemons } = state
    const { types, moves, regions } = filter
    const { error, data} = pokemons

    if (error) {
      return (<Error/>)
    }
    else {
      if (data) {
          const pokemons = data;
          return (
            <div className="PokedexPage">
              <div className='PokedexPage-banner'>
                  <Banner types={types} moves={moves} regions={regions} updateSearchQueryHandler={this.handleUpdateSearchQuery} />
              </div>
              <div className='PokedexPage-content'>
                  <div className='PokedexPage-content-wrapper'>
                    <PokemonList pokemons={pokemons} showDetailHandler={this.handleShowDetail}/>
                  </div>
              </div>
            </div>
          )  
      }
      else {
        return (<Spinner/>)
      }
    }
  }
}

const mapStateToProps = state => ({ "state": state })

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: query => {dispatch(action_creators.updateSearchQueryAction(query))},
  search: query => {dispatch(action_creators.searchAction(query))},

  fetchTypes: () => {
    dispatch(action_creators.fetchTypesPending());
    fetch(urls.API_TYPE_URL)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(action_creators.fetchTypesSuccess(res));
    })
    .catch (error => {
        dispatch(action_creators.fetchTypesError(error));
    })
  },

  fetchMoves: () => {
    dispatch(action_creators.fetchMovesPending());
    fetch(urls.API_MOVE_URL)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(action_creators.fetchMovesSuccess(res));
    })
    .catch (error => {
        dispatch(action_creators.fetchMovesError(error));
    })
  },

  fetchRegions: () => {
    /*
    dispatch(action_creators.fetchRegionsPending());
    fetch(urls.API_REGION_URL)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(action_creators.fetchRegionsSuccess(res));
    })
    .catch (error => {
        dispatch(action_creators.fetchRegionsError(error));
    })*/
  },


  fetchPokemons: () => {
    dispatch(action_creators.fetchPokemonsPending());
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(action_creators.fetchPokemonsSuccess(res));
    })
    .catch (error => {
        dispatch(action_creators.fetchPokemonsError(error));
    })
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPage);
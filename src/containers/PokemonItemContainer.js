import React from 'react';
import {connect} from 'react-redux';

import { fetchPokemonPending, fetchPokemonSuccess, fetchPokemonError } from '../actions';

import Spinner from '../components/commons/Spinner';
import Error from '../components/commons/Error';

class PokemonItemContainer extends React.Component {

	constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);

      this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleUpdateSearchFilter = this.handleUpdateSearchFilter.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.handleResizePage = this.handleResizePage.bind(this);

      this.handleFetchDetail = this.handleFetchDetail.bind(this);
      this.props.fetchPokemons()
  }

  shouldComponentRender() {
      console.log('shouldComponentRender')
      const { state } = this.props
      const { pokemons } = state
      const { pending } = pokemons
      console.log(' SHOULD RENDER ' +pending)
      if (pending) {
        console.log('COMPONENT SHOULD NOT RENDER')
        return false
      }
      else {
        console.log('COMPONENT SHOULD NOT RENDER')
        return true
      }
  }

  componentDidMount() {
    console.log('componentDidMount')

  }

  componentDidUpdate() {
    console.log('componentDidUpdate')

  }

  handleUpdateSearchQuery(query) {
    this.props.updateSearchQuery(query)
    this.props.search(query)
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

  handleFetchDetail(url) {
     console.log('POKEDEX handleFetchDetail')
     //this.props.fetchPokemon(url)
  }
  //<PokemonList pokemons={pokedex} fetchDetailHandler={this.handleFetchDetail}/>

	render() {
    console.log('RENDER')
    const { state } = this.props
    const { pokemons } = state
    const { error, data } = pokemons
    
    if (this.shouldComponentRender()) {
      if (error) {
        console.log('ERROR '+ error)
        return (<Error/>)
      }
      else {
        console.log('DATA '+ data)
        return (
          <div>
            <Header 
              updateSearchQueryHandler={this.handleUpdateSearchQuery}
              searchHandler={this.handleSearch} 
              updateSearchFilterHandler={this.handleUpdateSearchFilter} 
              filterHandler={this.handleFilter}
              pageResizeHandler={this.handleResizePage}/>
              <PokemonList pokemons={pokemons} fetchDetailHandler={this.handleFetchDetail}/>
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
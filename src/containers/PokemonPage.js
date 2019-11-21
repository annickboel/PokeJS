import React from 'react';
import {connect} from 'react-redux';
import './PokemonPage.css';

import { updateSearchQueryAction, searchAction } from '../actions';
import { fetchPokemonsPending, fetchPokemonsSuccess, fetchPokemonsError } from '../actions';
import { fetchPokemonPending, fetchPokemonSuccess, fetchPokemonError } from '../actions';

import PokemonList from '../components/list/PokemonList';
import Header from '../components/header/Header';
import Spinner from '../components/commons/Spinner';
import Banner from '../components/commons/Banner';
import Error from '../components/commons/Error';

class PokemonPage extends React.Component {

  constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
      this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
  }

  shouldComponentRender() {
      /*const { state } = this.props
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
      }*/
      return true;
  }

  handleUpdateSearchQuery(query) {
    console.log('POKEMON handleUpdateSearchQuery '+query)
    //this.props.updateSearchQuery(query)
    //this.props.search(query)
  }

  handleSearch(query) {
    this.props.actions.search(query)
  }
      
  render() {
    console.log('RENDER')
    const { state } = this.props
    const { pokemons } = state
    const { error, data } = pokemons
    return (
      <div class="PokemonPage">
        <div class='PokemonPage-banner'>
          <Banner updateSearchQueryHandler={this.handleUpdateSearchQuery}/>
        </div>
        <div class='PokemonPage-content'>
          CONTENT
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ "state": state })

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: query => {dispatch(updateSearchQueryAction(query))},
  search: query => {dispatch(searchAction(query))},
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
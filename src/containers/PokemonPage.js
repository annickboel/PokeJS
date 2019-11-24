import React from 'react';
import {connect} from 'react-redux';
import './PokemonPage.css';
import * as urls from '../constants/Urls.js'
import * as action_creators from '../actions';
import Pokemon from '../components/detail/Pokemon';
import Header from '../components/header/Header';
import Banner from '../components/commons/Banner';
import Error from '../components/commons/Error';

class PokemonPage extends React.Component {

  constructor(props) {
      super(props);

      //this.handleShowList = this.handleShowList.bind(this);
      this.handleNavigateTo = this.handleNavigateTo.bind(this);
      this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      
      //this.props.fetchPokemon(id);
  }

  handleUpdateSearchQuery(query) {
    console.log('POKEMON handleUpdateSearchQuery '+query)
    //this.props.updateSearchQuery(query)
    //this.props.search(query)
  }

  handleSearch(query) {
    this.props.actions.search(query)
  }
      

  /*handleShowList() {
    console.log('POKEMONPAGE handleShowList ')
    this.props.history.push('/pokedex/')
  }*/

  handleNavigateTo(url) {
    this.props.history.push(url)
  }

  render() {
    console.log('RENDER POKEMONPAGE')
    const id = this.props.match.params.id;
    const back = urls.POKEDEX_PAGE_URL;
    const location = this.props.location
    const { state } = location
    const { pokemons, filter} = state
    const { types, moves, regions } = filter
    const { data } = pokemons
    const { results } = data
    const pokemon = results[id-1]
    console.log(pokemon)

    return (
      <div class="PokemonPage">
        <div class='PokemonPage-banner'>
          <Banner types={types} moves={moves} regions={regions} updateSearchQueryHandler={this.handleUpdateSearchQuery}/>
        </div>
        <div class='PokemonPage-content'>
          <div className='PokedexPage-content-wrapper'>
              <Pokemon pokemon={pokemon} id={id} navigateToHandler={this.handleNavigateTo} back={back}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ "state": state })

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: query => {dispatch(action_creators.updateSearchQueryAction(query))},
  search: query => {dispatch(action_creators.searchAction(query))},
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
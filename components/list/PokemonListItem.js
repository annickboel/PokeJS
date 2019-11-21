/*
* PokemonList Item: Presentational component
*/
import React, { Component } from 'react';
import {connect} from 'react-redux';
import './PokemonListItem.css'
import { fetchPokemonPending, fetchPokemonSuccess, fetchPokemonError } from '../../actions';
import { API_BASE_URL} from '../../constants/Api';
import Spinner from '../commons/Spinner'
import Error from '../commons/Error'

class PokemonListItem extends Component {

  constructor(props) {
    super(props);
    console.log('PokemonListItem ctor')
    console.log(this.props.id)
    this.props.fetchPokemon(this.props.id)
  }

  renderTypeItem(item, index) {
    return (
        <div key={index} className='PokemonListItem-type'>
          {item.type.name}
        </div>
    )
  }
/*<div class="PokemonListItem">
            <div class="PokemonListItem-left">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
            </div>
            <div class="PokemonListItem-right">
              <div class="PokemonListItem-types">
                <div class="PokemonListItem-type">poison</div>
                <div class="PokemonListItem-type">grass</div>
              </div>
              <div class="PokemonListItem-id-wrapper">
                <div class=PokemonListItem-id>
                  1
                </div>
              </div>
            </div>
          </div>*/

  /*<div className='PokemonListItem'>
            <div className='PokemonListItem-left'>
              <div>
                <img src={sprite}/>
              </div>
            </div>
            <div className='PokemonListItem-right'>
              <div className='PokemonListItem-types'>
                {types.map((typeItem,index) => this.renderTypeItem(typeItem, index))}   
              </div>
              <div className='PokemonListItem-id-wrapper'>
                <div>
                  {data.id}
                </div>
              </div>
            </div>
          </div>*/

  render() {
    const { state } = this.props
    const { pokemons } = state
    const detail = pokemons.data.results[this.props.id-1].detail

    if (detail) {
      const {data, error } = detail
      if (data) {
        const types = data.types
        const sprite = data.sprites['front_default']
        return (
          <div className='PokemonListItem'>
            <div className='PokemonListItem-left'>
                AAA
            </div>
            <div className='PokemonListItem-right'>
               BBB
            </div>
          </div>
        )
      } else {
        return (<div></div>)
      }
    }
    else {
      return (<Spinner/>)
    }
  }
}

const mapStateToProps = state => ({ "state": state })

const mapDispatchToProps = dispatch => ({
  fetchPokemon: (id) => {
    console.log('fetchPokemon '+ id)
    dispatch(fetchPokemonPending(id));
    fetch(API_BASE_URL+'pokemon/'+id)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(fetchPokemonSuccess(id, res));
    })
    .catch (error => {
        dispatch(fetchPokemonError(id, error));
    })
  }

});
export default connect(mapStateToProps, mapDispatchToProps)(PokemonListItem);
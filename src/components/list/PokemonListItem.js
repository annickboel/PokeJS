/*
* PokemonList Item: Presentational component
*/
import React, { Component } from 'react';
import {connect} from 'react-redux';
import './PokemonListItem.css'
import * as action_creators from '../../actions';
import * as urls from '../../constants/Urls';
import Spinner from '../commons/Spinner'
import Error from '../commons/Spinner'

class PokemonListItem extends Component {

  constructor(props) {
    super(props);
    this.props.fetchPokemon(this.props.id)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.showDetailHandler(this.props.id);
  }

  renderType(item, index) {
    return (
        <div id={index} key={index} className='PokemonListItem-type'>{item.type.name}</div>
    )
  }

  render() {
    const { state } = this.props
    const { pokemons } = state;
    const result = pokemons.data.results[this.props.id-1]
    const { detail } = result;
    const { error, data } = detail
    if (error) {
      return (<Error/>)
    }
    else {
      if (data) {
        console.log('POKEMONLISTITEM RENDER')
        const detail = data
        const {types, sprites}  = detail
        const sprite = sprites['front_default']
        return (
          <div className='PokemonListItem'>
            <div className='PokemonListItem-content-wrapper' onClick={this.handleClick}>
              <div className='PokemonListItem-content'>
                <div className='PokemonListItem-picture-wrapper'>
                  <img className='PokemonListItem-picture' src={sprite} width="100%" alt='sprite'/>
                </div>
                <div className='PokemonListItem-footer'>
                   <div className='PokemonListItem-types'>
                      {types.map((item,index) => this.renderType(item, index))} 
                   </div>
                   <div className='PokemonListItem-id-wrapper'>
                      <div>{data.id}</div>
                   </div>
                </div>
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
  fetchPokemon: (id) => {
    dispatch(action_creators.fetchPokemonPending(id));
    fetch(urls.API_POKEMON_URL + id)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(action_creators.fetchPokemonSuccess(id, res));
    })
    .catch (error => {
        dispatch(action_creators.fetchPokemonError(id, error));
    })
  }

});
export default connect(mapStateToProps, mapDispatchToProps)(PokemonListItem);
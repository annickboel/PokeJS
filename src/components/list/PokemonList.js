/*
* List: Presentational component
*/
import React, { Component } from 'react';
import './PokemonList.css';
import PokemonListItem from './PokemonListItem'
import Pagination from '../pagination/Pagination'

class PokemonList extends Component {

	constructor(props) {
        super(props);
        this.handleShowDetail = this.handleShowDetail.bind(this);
    }

    handleShowDetail(id) {
        this.props.showDetailHandler(id);
    }

    renderItem(index, item) {
        //console.log('POKEMONTLIST renderItem' + index)
        const { pokemons } = this.props
        //console.log(pokemons)
        const { name, url } = item
        const array = url.split('/');
        const id = array[6]
        return (
            <PokemonListItem key={index} id={id} showDetailHandler={this.handleShowDetail}/>
        )
    }

	render() {
        //console.log('POKEMONTLIST RENDER')
        const { pokemons } = this.props
        //console.log(pokemons)
        const {count, next, previous, results} = pokemons
        return (
            <div className='PokemonList'>
                <Pagination class='PokemonList-pagination-show'/>
                {results.map((item,index) => this.renderItem(index, item))}
            </div>
        )
        
	}
}
export default (PokemonList);
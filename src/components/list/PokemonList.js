/*
* List: Presentational component
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../commons/Spinner'
import PokemonListItem from './PokemonListItem'
import Pagination from '../pagination/Pagination'

class PokemonList extends Component {

	constructor(props) {
        super(props);
        this.showDetail = this.showDetail.bind(this);
    }

    showDetail(e) {
        console.log('showDetail')
        console.log(e)
    }

    renderItem(index, item) {
        const { name, url } = item
        const array = url.split('/');
        const id = array[6]
        return (
            <PokemonListItem key={index} id={id}/>
        )
    }

	render() {
        const {pokemons} = this.props
        const { data, error} = pokemons
        const {count, next, previous, results} = data
        if (results) {
            return (
                <div class='PokemonList'>
                    <Pagination/>
                    <div className='PokemonList'>
                        {results.map((item,index) => this.renderItem(index, item))}
                    </div>
                </div>
            ) 
        }
        else {
            console.log('RESULTS IS NULL')
            return (
                <div>
                    ERROR
                </div>
            ) 

        }
        
        
	}
}
export default (PokemonList);
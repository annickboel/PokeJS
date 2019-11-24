/*
* Banner: Presentational component
*/
import React, { Component } from 'react';
import './Banner.css'
import Search from '../search/Search'

class Banner extends Component {
	constructor(props) {
      super(props);
      this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
      //this.handleSearch = this.handleSearch.bind(this);
  	}

  	handleUpdateSearchQuery(query){
  		console.log('BANNER handleUpdateSearchQuery '+query);
  		this.props.updateSearchQueryHandler(query);
  	}

	render() {
    //console.log('RENDER BANNER')
    const {types, moves, regions} = this.props;
    //console.log(this.props)
    //console.log(types)
		return ( 
		 	<div className='Banner'>
        <div className='Header-banner'>
        </div>
		 		<Search types={types} moves={moves} regions={regions} updateSearchQueryHandler={this.handleUpdateSearchQuery}/>
      </div>
		)
	}
}
export default (Banner);

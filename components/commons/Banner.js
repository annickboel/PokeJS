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
		return ( 
		 	<div className='Banner'>
		 		<Search updateSearchQueryHandler={this.handleUpdateSearchQuery}/>
            </div>
		)
	}
}
export default (Banner);
/*
* Header: Presentational component
*/
import React, { Component } from 'react';
import Search from '../search/Search'
import Filter from '../filter/Filter'
import Pagination from '../pagination/Pagination'
import './Header.css'

class Header extends Component {

	constructor(props) {
    	super(props)
    	this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
    	this.handleUpdateSearchFilter = this.handleUpdateSearchFilter.bind(this);
      this.handlePreviousPage = this.handlePreviousPage.bind(this);
      this.handleNextPage = this.handleNextPage.bind(this);
      this.handleUpdatePageSize = this.handleUpdatePageSize.bind(this);
  	}

  	handleUpdateSearchQuery(query) {
  		this.props.updateSearchQueryHandler(query)
  	}

  	handleUpdateSearchFilter(filter) {
  		console.log('HEADER handleUpdateSearchFilter')
  		this.props.updateSearchFilterHandler(filter)
  	}

    handlePreviousPage(url) {
      console.log('HEADER handlePreviousPage')
    }
    handleNextPage(url) {
      console.log('HEADER handleNextPage')
    }

  	handleUpdatePageSize(size) {
  		console.log('HEADER handleUpdatePageSize')
  	}

	render() {
		return ( 
		 	<div className='Header'>
        	<Filter/>
          <Pagination 
            updatePageSizeHandler={this.handleUpdatePageSize}
            previousPageHandler={this.handlePreviousPage}
            nextPageHandler={this.handleNextPage}/>
      </div>
		)
	}
}
export default (Header);
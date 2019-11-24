/*
* Search: Presentational component
*/
import React, { Component } from 'react';

import './Search.css'
import Filter from '../filter/Filter'

class Search extends Component {

	constructor(props) {
    	super(props)
    	this.state = {
    		query: '',
            filterClass:'Search-filter-criteria-hide'
    	}
    	this.handleChange = this.handleChange.bind(this);
    	this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
        this.handleToggleFilter = this.handleToggleFilter.bind(this);
  	}

    handleUpdateSearchQuery(query) {
    	this.props.handler(query)
  	}

    handleChange(e) {
        this.setState({query: e.target.value});
  	}

    handleToggleFilter() {
        const filterClass = (this.state.filterClass==='Search-filter-criteria-hide') 
        ? 'Search-filter-criteria-show' : 'Search-filter-criteria-hide';
        this.setState({filterClass: filterClass})  
    }
    
	render() {
        //console.log('SEARCH RENDER '+this.state.query)
        const {filterClass} = this.state;
        if (this.state.query !== '') {
            this.props.updateSearchQueryHandler(this.state.query);
        }
        //this.props.updateSearchQueryHandler(this.state.query);
		return ( 
            <div className='Search'>
                <div className='Search-header'>
                    <div className='Search-header-toggle' onClick={this.handleToggleFilter}>
                       <div className='Search-header-toggle-header'>
                            Filter
                        </div>
                        <div className='Search-header-toggle-content'>
                            <div className='Search-header-toggle-icon'/>
                            <div className='Search-header-toggle-icon'/>
                            <div className='Search-header-toggle-icon'/>
                        </div>
                    </div> 
                    <div className='Search-header-content'>
                        <div className='Search-form-wrapper'>
                            <input className='Search-form-input' type="text" name="query" value={this.state.query} placeholder="Search ..." onChange={this.handleChange}/>
                            <svg className='Search-form-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" aria-label="Search" role="img">
                                <path fill="#a3a3a3" d="M495.6 466.4L373.8 339.6a206 206 0 0 0 48.5-132.9C422.3 92.7 329.5 0 215.6 0S8.8 92.7 8.8 206.7s92.8 206.7 206.8 206.7c42.8 0 83.5-12.9 118.4-37.4l122.8 127.7a26.8 26.8 0 0 0 38.1.8 27 27 0 0 0 .7-38.1zm-280-412.5c84.2 0 152.8 68.6 152.8 152.8s-68.6 152.8-152.8 152.8S62.8 291 62.8 206.7 131.3 54 215.6 54z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={filterClass}>
                    <Filter types={this.props.types} moves={this.props.moves} regions={this.props.regions}/>
                </div>
            </div>
		)
	}
}
export default (Search);
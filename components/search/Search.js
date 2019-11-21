/*
* Search: Presentational component
*/
import React, { Component } from 'react';
import './Search.css'

class Search extends Component {

	constructor(props) {
    	super(props)
    	this.state = {
    		query: ''
    	}
    	this.handleChange = this.handleChange.bind(this);
    	this.handleUpdateSearchQuery = this.handleUpdateSearchQuery.bind(this);
  	}

    handleUpdateSearchQuery(query) {
    	this.props.handler(query)
  	}

    handleChange(e) {
        this.setState({query: e.target.value});
  	}

	render() {
        console.log('RENDER '+this.state.query)
        if (this.state.query != '') {
            this.props.updateSearchQueryHandler(this.state.query);
        }
        this.props.updateSearchQueryHandler(this.state.query);
		return ( 
		 	<div className='Search'>
        		<form className='Search-form'>
        			<input className='Search-form-input' type="text" name="query" value={this.state.query} placeholder="Enter a name" onChange={this.handleChange}/>
        		</form>
      		</div>
		)
	}
}
export default (Search);
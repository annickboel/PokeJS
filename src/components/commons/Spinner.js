/*
* Spinner: Presentational component
*/
import React, { Component } from 'react';

class Spinner extends Component {

	render() {
		return ( 
		 	<div className='Spinner'>
		 	    <img src='./loading.gif' alt='Loading ...'/>
      		</div>
		)
	}
}
export default (Spinner);
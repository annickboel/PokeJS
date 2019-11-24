/*
* Navigator: Presentational component
*/
import React, { Component } from 'react';
import './Navigator.css'
import * as urls from '../../constants/Urls';

class Navigator extends Component {
	constructor(props) {
      super(props);
      this.handleNavigateTo = this.handleNavigateTo.bind(this);
  }

  handleNavigateTo(){
  	console.log('NAVIGATOR handleNavigateTo ');
    console.log(this.props)
  	this.props.navigateToHandler(this.props.url);
  }

	render() {
    console.log('RENDER NAVIGATOR')
    const url = this.props.url;
    console.log(url);
		return ( 
		 	<div className='Navigator' onClick={this.handleNavigateTo()}>
        Back to list
      </div>
		)
	}
}
export default (Navigator);

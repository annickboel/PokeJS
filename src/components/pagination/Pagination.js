/*
* Pagination: Presentational component
*/
import React, { Component } from 'react';
import './Pagination.css';
import PageScroller from './PageScroller';
import PageSizer from './PageSizer';

class Pagination extends Component {

	constructor(props) {
        super(props);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleUpdatePageSize = this.handleUpdatePageSize.bind(this);
    }

    handlePreviousPage(url) {
        this.props.previousPageHandler(url);
    }
    handleNextPage(url) {
        this.props.nextPageHandler(url);    
  	}

  	handleUpdatePageSize(size) {
  		console.log('PAGINATION handleUpdatePageSize')
        this.props.updatePageSizeHandler(size);    
  	}

	render() {
		return (
			<div className='Pagination'>
        <div className='Pagination-content-wrapper'>
          <div className='Pagination-content'>
              <div className='Pagination-scroller'>
                <PageScroller previousPageHandler={this.handlePreviousPage} nextPageHandler={this.handleNextPage}/>
              </div>
              <div className='Pagination-sizer'>
                 <PageSizer updatePageSizeHandler={this.handleUpdatePageSize}/>
              </div>
          </div>
        </div>
      </div>
		)
	}
}
export default (Pagination);
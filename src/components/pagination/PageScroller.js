/*
* PageSizer: Presentational component
*/
import React, { Component } from 'react';
import './PageScroller.css'
class PageScroller extends Component {

	constructor(props) {
        super(props);
        this.state = {
            count: 0,
            visibility: true,
            next: '',
            previous: ''
        };
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
    }

    handlePreviousPage(url) {
        const {visibility} = this.state;
        if (visibility) {
            this.props.previousPageHandler(url);
        }
    }

    handleNextPage(url) {
        const {visibility} = this.state;
        if (visibility) {
            this.props.nextPageHandler(url);
        }
    }

	render() {
		//const { count, next, previous, visibility } = this.state
        const { visibility } = this.state
        if (visibility) {
            return (
                <div className='PageScroller'>
                    <div className='PageScroller-wrapper'>
                        <div className='PageScroller-left-show'>
                            <div className='PageScroller-previous' onClick={this.handlePreviousPage}>&lt;</div>
                        </div>
                        <div className='PageScroller-center'>
                            &nbsp;
                        </div>
                        <div className='PageScroller-right-show'>
                            <div className='PageScroller-next' onClick={this.handleNextPage}>&gt;</div>
                        </div>
                    </div>
                    
                </div>
            )
        }
        else {
            return (
                <div className='PageScroller'>
                    <div className='PageScroller-wrapper'>
                        <div className='PageScroller-left-hide'>
                            <div className='PageScroller-previous' onClick={this.handlePreviousPage}>&lt;</div>
                        </div>
                        <div className='PageScroller-center'>
                            &nbsp;
                        </div>
                        <div className='PageScroller-right-hide'>
                            <div className='PageScroller-next' onClick={this.handleNextPage}>&gt;</div>
                        </div>
                    </div>
                    
                </div>
            )
        }
    }
}
export default (PageScroller);
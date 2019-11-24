/*
* PageSizer: Presentational component
*/
import React, { Component } from 'react';
import './PageSizer.css'
class PageSizer extends Component {

	constructor(props) {
        super(props);
        this.state = {
            size: 20,
            option_ids: [0, 1, 2, 3, 4],
            options: [{size: 10}, {size: 20},  {size: 30}, {size: 40}, {size: 50}],
            selectedOptionId: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
    	const { options } = this.state
    	this.setState({size: options[e.target.value], selectedOptionId: e.target.value})
    	const {size } = this.state
    	this.props.updatePageSizeHandler(size)
  	}

	render() {
		const { selectedOptionId, option_ids, options } = this.state
        return (
            <div className='PageSizer'>
            	<select className='PageSizer-select' defaultValue={selectedOptionId} onChange={this.handleChange}>
            		{option_ids.map(id =>
            		<option className='PageSizer-option' key={id} value={id}>{options[id].size}</option>
         			)}
          		</select>
            </div>
        )
    }
}
export default (PageSizer);
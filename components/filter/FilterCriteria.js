/*
* Filter: Presentational component
*/
import React, { Component } from 'react';
import './FilterCriteria.css'

class FilterCriteria extends Component {

	constructor(props) {
        super(props);
        this.state = {
            selectClass:'Filter-criteria-select-values-hide',
            selected_options:[]
        };
        this.handleToggleOptions = this.handleToggleOptions.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.renderSelectableOption = this.renderSelectableOption.bind(this);
        this.renderSelectedOption = this.renderSelectedOption.bind(this)
        this.handleUpdateFilter = this.handleUpdateFilter.bind(this);
    }

	handleToggleOptions() {
		const selectClass = (this.state.selectClass==='Filter-criteria-select-values-hide') 
		? 'Filter-criteria-select-values-show' : 'Filter-criteria-select-values-hide';
		this.setState({selectClass: selectClass})  
	}

	handleUpdateFilter(){
		const {options} = this.state;
		this.props.updateFilterHandler(this.props.criteria, options);
	}

	handleSelectOption(e) {
		console.log('handleSelectOption '+e.target.id)
		console.log(this.state)
		var {selected_options} = this.state;
		if (!selected_options.includes(this.props.options[e.target.id])) {
			selected_options.push(this.props.options[e.target.id])
		}
		this.setState({selected_options, ...this.state, options:selected_options})
	}

	renderSelectableOption(index, option) {
        return (
            <div key={index} className='FilterCriteria-selectable-option'>
            	<div id={index} onClick={this.handleSelectOption}>
            		{option}
            	</div>
            </div>	 					
        )
    }

    renderSelectedOption(index, option) {
    	return(
    		<div id={index} key={index} className='FilterCriteria-selected-option'>
    			{option}
    		</div>
    	)
    }

	render() {
		console.log('RENDER')
		const { selectClass } = this.state;
		const label = this.props.label;
		const selectable_options = this.props.options;
		const {selected_options} = this.state;
		this.handleUpdateFilter()
		return ( 
		 	<div className='FilterCriteria'>
		 		<div className="FilterCriteria-item">
		 			<div className="FilterCriteria-item-left">
		 				<div className='FilterCriteria-item-label'>
		 					{label}
		 				</div>
		 			</div>
		 			<div className="FilterCriteria-item-right">
		 				<div className='FilterCriteria-item-value'>
		 					<div className='FilterCriteria-item-value-selected'>
		 						{selected_options.map((option,index) => this.renderSelectedOption(index, option))}
		 					</div>
		 					<div className='FilterCriteria-item-value-select' onClick={this.handleToggleOptions}>
		 						<select className='FilterCriteria-item-select'>
		 						</select>
		 					</div>
		 				</div>
		 				<div className={selectClass}>
		 					<div className='FilterCriteria-options-wrapper'>
		 						{selectable_options.map((option,index) => this.renderSelectableOption(index, option))}
		 					</div>
		 				</div>
		 			</div>
		 		</div>
      		</div>
		)
	}
	/*
	render() {
		console.log('RENDER')
		const { selectClass } = this.state;
		const label = this.props.label;
		const selectable_options = this.props.options;
		const {selected_options} = this.state;
		//this.handleUpdateFilter()
		return ( 
		 	<div className='FilterCriteria'>
		 		<div className="FilterCriteria-item">
		 			<div className="FilterCriteria-item-left">
		 				<div className='FilterCriteria-item-label'>
		 					{label}
		 				</div>
		 			</div>
		 			<div className="FilterCriteria-item-right">
		 				<div className='FilterCriteria-item-value'>
		 					<div className='FilterCriteria-item-value-selected'>
		 					    {selected_options.map((option,index) => this.renderSelectedOption(index, option))}
		 					</div>
		 					<div className='FilterCriteria-item-value-select' onClick={this.handleToggleOptions}>
		 						<select className='FilterCriteria-item-select'>
		 						</select>
		 					</div>
		 				</div>
		 				<div className={selectClass}>
		 					<div className='FilterCriteria-options-wrapper'>
		 						{selectable_options.map((option,index) => this.renderSelectableOption(index, option))}
		 					</div>
		 				</div>
		 			</div>
		 		</div>
      		</div>
		
	})*/
}
export default (FilterCriteria);
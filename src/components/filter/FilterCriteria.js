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
            selected_options:[],
            selectable_options:[]
        };
        this.handleToggleOptions = this.handleToggleOptions.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.handleDeSelectOption = this.handleDeSelectOption.bind(this);
        this.renderSelectableOptions = this.renderSelectableOptions.bind(this);
        this.renderSelectableOption = this.renderSelectableOption.bind(this);
        this.renderSelectedOption = this.renderSelectedOption.bind(this)
        this.handleUpdateFilter = this.handleUpdateFilter.bind(this);
    }

    componentDidMount() {
    	const selectable_options = this.props.options;
        this.setState({selectable_options, ...this.state, selectable_options})
    }

	handleToggleOptions() {
		const selectClass = (this.state.selectClass==='Filter-criteria-select-values-hide') 
		? 'Filter-criteria-select-values-show' : 'Filter-criteria-select-values-hide';
		this.setState({selectClass: selectClass})  
	}

	handleUpdateFilter(){
		const {selected_options} = this.state;
		this.props.updateFilterHandler(this.props.criteria, selected_options);
	}

	handleSelectOption(e) {
		var {selected_options} = this.state;
		const selected_option = e.nativeEvent.target.value;
		if (!selected_options.includes(selected_option)) {
			selected_options.push(selected_option)
		}
		this.setState({selected_options, ...this.state, options:selected_options})
	}

	handleDeSelectOption(e) {
		var { selected_options } = this.state;
		var filtered_options = selected_options.filter(function(option, index, selected_options) {
			console.log(option !== selected_options[e.target.id])
			return option !== selected_options[e.target.id];
		});
		console.log('FILTERED OPTIONS')
		console.log(filtered_options)
		this.setState({selected_options, ...this.state, selected_options:filtered_options})
	}


	renderSelectableOptions(selectable_options) {
		if (selectable_options) {
			selectable_options.map((option,index) => this.renderSelectableOption(index, option))
		}
	}

	renderSelectableOption(index, option) {
		console.log('renderSelectableOption' + option)
        return (
            <option key={index} id={index} value={option}>{option}</option>	 					
        )
    }

    renderSelectedOption(index, option) {
    	return(
    		<div key={index} className='FilterCriteria-selected-option'>
    			<div className='FilterCriteria-selected-option-value'>{option}</div>
    			<div id={index} className='FilterCriteria-selected-option-deleted' onClick={this.handleDeSelectOption}>X</div>
    		</div>
    	)
    }
   
   	extract_options(options) {
   		var length = options.length;
   		var i = 0;
   		var selectable_options = []
   		for (i=0;i<length;i++) {
   			var item = options[i];
  			var name = item.name
   			selectable_options.push(name)
   		}
   		return selectable_options
   	}

	render() {
		console.log('FILTER CRITERIA RENDER')
		const { selectClass } = this.state;
		const label = this.props.label;
		const selectable_options = this.extract_options(this.props.options)
		const {selected_options} = this.state;
		this.handleUpdateFilter()
		return ( 
		 	<div className='FilterCriteria'>
	            <div className='FilterCriteria-type'>
	                <div className='FilterCriteria-type-name'>
	                    {label}
	                </div>
	            </div>
	            <div className='FilterCriteria-select'>
	                <select className='FilterCriteria-selectable-options' onChange={this.handleSelectOption}>
	                	{this.renderSelectableOptions(selectable_options)}
	                </select>      
	                <div className='FilterCriteria-selected-options'>
	                	{this.renderSelectableOptions}	
		 				{selected_options.map((option,index) => this.renderSelectedOption(index, option))}
	                </div>
	            </div>
	        </div> 
		)
	}
}
export default (FilterCriteria);
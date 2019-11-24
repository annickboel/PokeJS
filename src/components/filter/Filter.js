/*
* Filter: Presentational component
*/
import React, { Component } from 'react';
import FilterCriteria from './FilterCriteria';
import './Filter.css'

class Filter extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	show:false,
        	filterClass:'Filter-content-hide',
        	types: ['Type1', 'Type2', 'Type3'],
        	selected_types: [],
			moves: ['Move1', 'Move2', 'Move3'],
			selected_moves: [],
			regions:['Region1', 'Region2', 'Region3'],
			selected_regions: []
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSelectTypes = this.handleSelectTypes.bind(this);
        this.handleSelectMoves = this.handleSelectMoves.bind(this);
        this.handleSelectRegions = this.handleSelectRegions.bind(this);
        this.handleUpdateFilter = this.handleUpdateFilter.bind(this);
    }

    handleToggle() {
    	console.log('handleToggle')
    	const filterClass = (this.state.filterClass==='Filter-content-hide') 
		? 'Filter-content-show' : 'Filter-content-hide';
		this.setState({filterClass: filterClass})  
    }

	handleSelectTypes() {
		const selectTypesClass = (this.state.selectTypesClass==='Filter-criteria-select-values-hide') 
		? 'Filter-criteria-select-values-show' : 'Filter-criteria-select-values-hide';
		this.setState({selectTypesClass: selectTypesClass})  
	}

	handleSelectMoves() {
		const selectMovesClass = (this.state.selectMovesClass==='Filter-criteria-select-values-hide') 
		? 'Filter-criteria-select-values-show' : 'Filter-criteria-select-values-hide';
		this.setState({selectMovesClass: selectMovesClass})  
	}

	handleSelectRegions() {
		const selectRegionsClass = (this.state.selectRegionsClass==='Filter-criteria-select-values-hide') 
		? 'Filter-criteria-select-values-show' : 'Filter-criteria-select-values-hide';
		this.setState({selectRegionsClass: selectRegionsClass})  
	}

	handleUpdateFilter(criteria, options){
		//console.log('FILTER handleUpdateFilter')
		//console.log(criteria + ' ' + options)
		switch (criteria) {
			case 0:
				//this.setState({selected_types: options})
				break;
			case 1:
				//this.setState({selected_moves: options})
				break;
			case 2:
				//this.setState({selected_regions: options})
				break;
			default:
				break;
		}
	}

	render() {
		console.log('FILTER RENDER')
		const { filterClass } = this.state;
		const {types, moves, regions } = this.props;
		//console.log(types)
		return ( 
		 	<div className='Filter'>
                <div className='Filter-criteria-wrapper'>
               		<FilterCriteria label="Types" criteria={0} options={types} updateFilterHandler={this.handleUpdateFilter}/>
			 		<FilterCriteria label="Moves" criteria={1} options={moves} updateFilterHandler={this.handleUpdateFilter}/>
			 		<FilterCriteria label="Regions" criteria={2} options={regions} updateFilterHandler={this.handleUpdateFilter}/>	
                </div>          
            </div>

		)
	}
}
export default (Filter);
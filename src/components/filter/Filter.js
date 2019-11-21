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
        	types: ['Type1', 'Type2', 'Type3'],
        	selected_types: [],
			moves: ['Move1', 'Move2', 'Move3'],
			selected_moves: [],
			regions:['Region1', 'Region2', 'Region3'],
			selected_regions: []
        };
        this.handleSelectTypes = this.handleSelectTypes.bind(this);
        this.handleSelectMoves = this.handleSelectMoves.bind(this);
        this.handleSelectRegions = this.handleSelectRegions.bind(this);
        this.handleUpdateFilter = this.handleUpdateFilter.bind(this);
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
		console.log('FILTER handleUpdateFilter')
		console.log(criteria + ' ' + options)
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
		const {types, moves, regions} = this.state;
		return ( 
		 	<div className='Filter'>
		 		<FilterCriteria label="Types" criteria={0} options={types} updateFilterHandler={this.handleUpdateFilter}/>
		 		<FilterCriteria label="Moves" criteria={1} options={moves} updateFilterHandler={this.handleUpdateFilter}/>
		 		<FilterCriteria label="Regions" criteria={2} options={regions} updateFilterHandler={this.handleUpdateFilter}/>		
      		</div>
		)
	}
}
export default (Filter);
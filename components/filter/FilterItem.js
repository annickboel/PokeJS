/*
* Filter: Presentational component
*/
import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
	constructor(props) {
        super(props);
        this.state = {
            selectTypesClass:'Filter-criteria-select-values-hide',
            selectMovesClass:'Filter-criteria-select-values-hide',
            selectRegionsClass:'Filter-criteria-select-values-hide',
            
        };
        this.handleSelectTypes = this.handleSelectTypes.bind(this);
        this.handleSelectMoves = this.handleSelectMoves.bind(this);
        this.handleSelectRegions = this.handleSelectRegions.bind(this);
    }

	handleSelectTypes() {
		const selectTypesClass = (this.state.selectTypesClass=='Filter-criteria-select-values-hide') 
		? 'Filter-criteria-select-values-show' : 'Filter-criteria-select-values-hide';
		this.setState({selectTypesClass: selectTypesClass})  
	}

	handleSelectMoves() {
		const selectMovesClass = (this.state.selectMovesClass=='Filter-criteria-select-values-hide') 
		? 'Filter-criteria-select-values-show' : 'Filter-criteria-select-values-hide';
		this.setState({selectMovesClass: selectMovesClass})  
	}

	handleSelectRegions() {
		const selectRegionsClass = (this.state.selectRegionsClass=='Filter-criteria-select-values-hide') 
		? 'Filter-criteria-select-values-show' : 'Filter-criteria-select-values-hide';
		this.setState({selectRegionsClass: selectRegionsClass})  

	}

	render() {
		const {selectTypesClass, selectMovesClass, selectRegionsClass} = this.state;
		console.log('RENDER '+selectTypesClass)
		return ( 
		 	<div className='Filter'>
		 		<div className='Filter-criteria'>
		 			<div className="Filter-criteria-item">
		 				<div className="Filter-criteria-item-left">
		 					<div className='Filter-criteria-item-label'>
		 						Types
		 					</div>
		 				</div>
		 				<div className="Filter-criteria-item-right">
		 					<div className='Filter-criteria-item-value'>
		 						<div className='Filter-criteria-item-value-selected'>
		 							SELECTED
		 						</div>
		 						<div className='Filter-criteria-item-value-select' onClick={this.handleSelectTypes}>
		 							<select className='Filter-criteria-item-select'>
		 							</select>
		 						</div>
		 					</div>
		 					<div class={selectTypesClass}>
		 						<div class='Filter-options-wrapper'>
			 						<div className='Filter-select-option'>
			 							TYPE1
			 						</div>
			 						<div className='Filter-select-option'>
			 							TYPE2
			 						</div>
			 						<div className='Filter-select-option'>
			 							TYPE3
			 						</div>
		 						</div>
		 					</div>
		 				</div>
		 			</div>
      			</div>

      			<div className='Filter-criteria'>
		 			<div className="Filter-criteria-item">
		 				<div className="Filter-criteria-item-left">
		 					<div className='Filter-criteria-item-label'>
		 						Moves
		 					</div>
		 				</div>
		 				<div className="Filter-criteria-item-right">
		 					<div className='Filter-criteria-item-value'>
		 						<div className='Filter-criteria-item-value-selected'>
		 							SELECTED
		 						</div>
		 						<div className='Filter-criteria-item-value-select' onClick={this.handleSelectMoves}>
		 							<select className='Filter-criteria-item-select'>
		 							</select>
		 						</div>
		 					</div>
		 					<div class={selectMovesClass}>
		 						<div class='Filter-options-wrapper'>
			 						<div className='Filter-select-option'>
			 							MOVE1
			 						</div>
			 						<div className='Filter-select-option'>
			 							MOVE2
			 						</div>
			 						<div className='Filter-select-option'>
			 							MOVE3
			 						</div>
		 						</div>
		 					</div>
		 				</div>
		 			</div>
      			</div>
      			<div className='Filter-criteria'>
		 			<div className="Filter-criteria-item">
		 				<div className="Filter-criteria-item-left">
		 					<div className='Filter-criteria-item-label'>
		 						Regions
		 					</div>
		 				</div>
		 				<div className="Filter-criteria-item-right">
		 					<div className='Filter-criteria-item-value'>
		 						<div className='Filter-criteria-item-value-selected'>
		 							SELECTED
		 						</div>
		 						<div className='Filter-criteria-item-value-select' onClick={this.handleSelectMoves}>
		 							<select className='Filter-criteria-item-select'>
		 							</select>
		 						</div>
		 					</div>
		 					<div class={selectRegionsClass}>
		 						<div class='Filter-options-wrapper'>
			 						<div className='Filter-select-option'>
			 							REGION1
			 						</div>
			 						<div className='Filter-select-option'>
			 							REGION2
			 						</div>
			 						<div className='Filter-select-option'>
			 							REGION3
			 						</div>
		 						</div>
		 					</div>
		 				</div>
		 			</div>
      			</div>
      		</div>
		)
	}
}
export default (Filter);
/*
* Pagination Reducer : Handle actions needed to paginate the Pokemons list
*/
import {FIRST_PAGE, PREVIOUS_PAGE, NEXT_PAGE, LAST_PAGE, UPDATE_PAGE_SIZE } from '../constants/ActionTypes';

const initialState = {
    size: 20,
	count: 0,
    first: '',
    next: '',
    previous: '',
    last: '',
    needed: false
}

export function paginationReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PAGE_SIZE: 
            console.log("UPDATE_PAGE_SIZE")
            return state
        case FIRST_PAGE: 
            console.log("FIRST_PAGE")
            return state
        case PREVIOUS_PAGE: 
            console.log("PREVIOUS_PAGE")
            return state
        case NEXT_PAGE: 
            console.log("NEXT_PAGE")
            return state
        case LAST_PAGE: 
            console.log("LAST_PAGE")
            return state
        default: 
            return state;
    }
}
export default paginationReducer
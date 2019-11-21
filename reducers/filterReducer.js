/*
* Filter Reducer : Handle actions needed to filter Pokemons
*/
import {UPDATE_FILTER, FILTER} from '../constants/ActionTypes';

const initialState = {
	filter: {}
}

export function filterReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FILTER: 
            console.log("UPDATE_FILTER")
            return {
                ...state,
                query: action.payload.query
            }
        case FILTER:
            console.log("FILTER")
            return state
        default: 
            return state;
    }
}
export default filterReducer
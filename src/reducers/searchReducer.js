/*
* Search Reducer : Handle actions needed to search Pokemons
*/
import {UPDATE_SEARCH_QUERY, SEARCH} from '../constants/ActionTypes';

const initialState = {
	query: '',
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH_QUERY: 
            return {
                ...state,
                query: action.payload.query
            }
        case SEARCH:
            console.log("SEARCH "+ action.payload.query)
            return state
        default: 
            return state;
    }
}
export default searchReducer
/*
* Filter Reducer : Handle actions needed to filter Pokemons
*/
import * as action_types from '../constants/ActionTypes';
const initialState = {
	filter: {},
    types: [],
    moves: [],
    regions: []
}

export function filterReducer(state = initialState, action) {
    switch (action.type) {
        case action_types.FETCH_TYPES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case action_types.FETCH_TYPES_SUCCESS:
            return {
                ...state,
                pending: false,
                types: action.payload.data.results
            }
        case action_types.FETCH_TYPES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }

        case action_types.FETCH_MOVES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case action_types.FETCH_MOVES_SUCCESS:
            return  {
                ...state,
                pending: false,
                moves: action.payload.data.results
            }
    
        case action_types.FETCH_MOVES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }



        case action_types.UPDATE_FILTER: 
            console.log("UPDATE_FILTER")
            return {
                ...state,
                query: action.payload.query
            }
        case action_types.FILTER:
            console.log("FILTER")
            return state
        default: 
            return state;
    }
}
export default filterReducer
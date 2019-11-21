/*
* Pokemon Reducer : Handle Pokemon actions
*/
import {FETCH_POKEMON_PENDING, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR} from '../constants/ActionTypes';

const initialState = {
	pending: false,
    detail: {},
    error: null	
}

export function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POKEMON_PENDING: 
            console.log("FETCH_POKEMON_PENDING")
            return {
                ...state,
                pending: true
            }
        case FETCH_POKEMON_SUCCESS:
            console.log("FETCH_POKEMON_SUCCESS")
            return {
                ...state,
                pending: false,
                detail: action.payload.detail
            }
        case FETCH_POKEMON_ERROR:
             console.log("FETCH_POKEMON_ERROR")
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
export default pokemonReducer
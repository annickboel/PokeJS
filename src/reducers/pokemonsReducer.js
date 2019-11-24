/*
* Pokemons Reducer : Handle Pokemon list actions 
*/
import * as types from '../constants/ActionTypes';

const initialState = {
	pending: false,
    data: null,
    error: null
}

export function pokemonsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_POKEMONS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case types.FETCH_POKEMONS_SUCCESS:
             return {
                ...state,
                pending: false,
                data: action.payload.results
            }
        case types.FETCH_POKEMONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }


        case types.FETCH_POKEMON_PENDING: 
            console.log("FETCH_POKEMON_PENDING "+ action.payload.id)
            console.log(state)
            var data = state.data
            if ((data) && (data.results)) {
                var results = data.results
                console.log(results)
                console.log(action.payload.id)
                results[action.payload.id-1].detail={pending: true, data : null, error: null }
                data.results = results
                return {
                    ...state,
                    data: data
                }
            }
            else {
                var new_state = {
                    ...state,
                    pending: true
                    
                }
                console.log('ICI')
                console.log(new_state)
                return new_state
                /*return {
                    ...state,
                    pending: true
                }*/
            }
           
        case types.FETCH_POKEMON_SUCCESS:
            var data = state.data
            if ((data) && (data.results)) {
                var results = data.results
                results[action.payload.id-1].detail.pending=false
                results[action.payload.id-1].detail.data=action.payload.detail
                data.results = results
                return {
                    ...state,
                    pending: false,
                    data: data
                }
            }
            else {
                return {
                    ...state,
                    pending: false,
                    data: data
                }
            }
            
        case types.FETCH_POKEMON_ERROR:
            console.log("FETCH_POKEMON_ERROR")
            var data = state.data
            if ((data) && (data.results)) {
                var results = data.results
                results[action.payload.id-1].detail.pending=false
                results[action.payload.id-1].detail.error=action.payload.error
                data.results = results
                return {
                    ...state,
                    data: data
                }
            }
            else {
                return {
                    ...state,
                    pending: false,
                    error: action.payload.error
                }
            }
            
        default: 
            return state;
    }
}
export default pokemonsReducer
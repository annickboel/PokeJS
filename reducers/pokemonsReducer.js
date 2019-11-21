/*
* Pokemons Reducer : Handle Pokemon list actions 
*/
import * as types from '../constants/ActionTypes';

const initialState = {
	pending: false,
    data: {},
    error: null
}

export function pokemonsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_POKEMONS_PENDING: 
            var new_state = {
                ...state,
                pending: true}
            console.log("FETCH_POKEMONS_PENDING "+new_state.pending)
            return new_state
            
    
        case types.FETCH_POKEMONS_SUCCESS:
            console.log("FETCH_POKEMONS_SUCCESS")
            console.log(action.payload.results)
            return {
                ...state,
                pending: false,
                data: action.payload.results
            }
        case types.FETCH_POKEMONS_ERROR:
            console.log("FETCH_POKEMONS_ERROR")
            console.log(action.payload.error)
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }


        case types.FETCH_POKEMON_PENDING: 
            //console.log("FETCH_POKEMON_PENDING "+ action.payload.id)
            var data = state.data
            var results = data.results
            //console.log(results)
            results[action.payload.id-1].detail={pending: true, data : null, error: null }
            data.results = results
            //console.log(data)
            return {
                ...state,
                data: data
            }
            return state
        case types.FETCH_POKEMON_SUCCESS:
            //console.log("FETCH_POKEMON_SUCCESS")
            //console.log(action.payload.id)
            //console.log(action.payload.detail)
            var data = state.data
            var results = data.results
            //console.log('ICI1')
            //console.log(results)
            //console.log('ICI2')
            //console.log(results[action.payload.id-1])
            results[action.payload.id-1].detail.pending=false
            results[action.payload.id-1].detail.data=action.payload.detail
            data.results = results
            //console.log('ICI3')
            //console.log(data)
            return {
                ...state,
                pending: false,
                data: data
            }
        case types.FETCH_POKEMON_ERROR:
            console.log("FETCH_POKEMON_ERROR")
            //console.log(action.payload.id)
            //console.log(action.payload.error)
            var data = state.data
            var results = data.results
            results[action.payload.id-1].detail.pending=false
            results[action.payload.id-1].detail.error=action.payload.error
            data.results = results
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        default: 
            return state;
    }
}
export default pokemonsReducer
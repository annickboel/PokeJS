/*
* Action creators : 
*    . Provide functions to create actions
*.   . A action is an object with a type an a payload
*/
import * as types from '../constants/ActionTypes'


export const searchAction = (query) => (
	{ 
		type: types.SEARCH,
		payload: { query : query }
	}
)

export const updateSearchQueryAction = (query) => (
	{ 
		type: types.UPDATE_SEARCH_QUERY,
		payload: { query : query }
	}
)

export const filter = (filter) => (
	{ 
		type: types.FILTER,
		payload: { filter : filter }
	}
)


//Pokemon List actions
export const fetchPokemonsPending = () => (
	{ 
		type: types.FETCH_POKEMONS_PENDING
	}
)
export const fetchPokemonsSuccess = (results) => (
	{ 
	  type: types.FETCH_POKEMONS_SUCCESS,
	  payload: { results: results}
	}
)
export const fetchPokemonsError = (error) => (
	{ 
	  type: types.FETCH_POKEMONS_ERROR,
	  payload: { error: error}
	}
)

//Pokemon Detail actions
export const fetchPokemonPending = (id) => (
	{ 
		type: types.FETCH_POKEMON_PENDING,
		payload: { id: id}
	}
)
export const fetchPokemonSuccess = (id, result) => (
	{ 
	  type: types.FETCH_POKEMON_SUCCESS,
	  payload: { id: id,  detail: result}
	}
)
export const fetchPokemonError = (id, error) => (
	{ 
	  type: types.FETCH_POKEMON_ERROR,
	  payload: { id: id, error: error}
	}
)

//export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})


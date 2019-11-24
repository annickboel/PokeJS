/*
* Action creators : 
*    . Provide functions to create actions
*.   . A action is an object with a type an a payload
*/
import * as actions_types from '../constants/ActionTypes'

export const fetchTypesPending = () => (
	{ 
		type: actions_types.FETCH_TYPES_PENDING
	}
)
export const fetchTypesSuccess = (results) => (
	{ 
	  type: actions_types.FETCH_TYPES_SUCCESS,
	  payload: { data: results}
	}
)
export const fetchTypesError= (error) => (
	{ 
	  type: actions_types.FETCH_TYPES_ERROR,
	  payload: { error: error}
	}
)
export const fetchMovesPending = () => (
	{ 
		type: actions_types.FETCH_MOVES_PENDING
	}
)
export const fetchMovesSuccess = (results) => (
	{ 
	  type: actions_types.FETCH_MOVES_SUCCESS,
	  payload: { data: results}
	}
)
export const fetchMovesError= (error) => (
	{ 
	  type: actions_types.FETCH_MOVES_ERROR,
	  payload: { error: error}
	}
)


export const searchAction = (query) => (
	{ 
		type: actions_types.SEARCH,
		payload: { query : query }
	}
)

export const updateSearchQueryAction = (query) => (
	{ 
		type: actions_types.UPDATE_SEARCH_QUERY,
		payload: { query : query }
	}
)

export const filter = (filter) => (
	{ 
		type: actions_types.FILTER,
		payload: { filter : filter }
	}
)


//Pokemon List actions
export const fetchPokemonsPending = () => (
	{ 
		type: actions_types.FETCH_POKEMONS_PENDING
	}
)
export const fetchPokemonsSuccess = (results) => (
	{ 
	  type: actions_types.FETCH_POKEMONS_SUCCESS,
	  payload: { results: results}
	}
)
export const fetchPokemonsError = (error) => (
	{ 
	  type: actions_types.FETCH_POKEMONS_ERROR,
	  payload: { error: error}
	}
)

//Pokemon Detail actions
export const fetchPokemonPending = (id) => (
	{ 
		type: actions_types.FETCH_POKEMON_PENDING,
		payload: { id: id}
	}
)
export const fetchPokemonSuccess = (id, result) => (
	{ 
	  type: actions_types.FETCH_POKEMON_SUCCESS,
	  payload: { id: id,  detail: result}
	}
)
export const fetchPokemonError = (id, error) => (
	{ 
	  type: actions_types.FETCH_POKEMON_ERROR,
	  payload: { id: id, error: error}
	}
)



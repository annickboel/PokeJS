import { combineReducers } from 'redux'
import { searchReducer } from './searchReducer'
import { filterReducer } from './filterReducer'
import { pokemonsReducer } from './pokemonsReducer'
import { pokemonReducer } from './pokemonReducer'
import { paginationReducer } from './paginationReducer'

const rootReducer = combineReducers({
	search: searchReducer,
	filter: filterReducer,
	pokemons: pokemonsReducer,
	//pokemon: pokemonReducer,
	pagination: paginationReducer,
})
export default rootReducer


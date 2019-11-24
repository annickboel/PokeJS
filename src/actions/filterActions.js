/*
* Filter Action creators : 
*/
import * as types from '../constants/ActionTypes'

export const fetchTypesPending = () => (
	{ 
		type: types.FETCH_TYPES_PENDING
	}
)
export const fetchTypesSuccess = (results) => (
	{ 
	  type: types.FETCH_TYPES_SUCCESS,
	  payload: { results: results}
	}
)
export const fetchTypesError= (error) => (
	{ 
	  type: types.FETCH_TYPES_ERROR,
	  payload: { error: error}
	}
)



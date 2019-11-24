//https://itnext.io/how-to-use-redux-with-react-143de57d0bab
//https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
//https://github.com/reduxjs/redux/blob/master/examples/todomvc

//https://www.thegreatcodeadventure.com/the-react-plus-redux-container-pattern/
//SEARCH POKEMON https://codepen.io/IAmAlexJohnson/pen/zENWJG
//https://codeburst.io/getting-started-with-react-router-5c978f70df91
//https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664926-simulez-des-evenements

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Routing from './components/routing/Routing'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css'
import * as serviceWorker from './serviceWorker'

const store =  createStore(rootReducer)
render(
	<Provider store={store}>
  		<Routing/>
	</Provider>,
	document.getElementById('root'),
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()


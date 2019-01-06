import { Provider } from 'react-redux'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'



export default ({children, initialState = {}}) => {
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
	return (<Provider store={store}>
		{children}
	</Provider>)
}
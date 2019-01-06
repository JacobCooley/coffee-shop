import React from 'react'
import ReactDOM from 'react-dom'
import "@babel/polyfill"
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {
	createStore,
	applyMiddleware
} from 'redux'
import App from '@app/AppContainer'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import HttpsRedirect from 'react-https-redirect'
const middleware = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(rootReducer, middleware)

ReactDOM.render(
	<HttpsRedirect>
		<Provider store={store}>
			<App />
		</Provider>
	</HttpsRedirect>,
	document.getElementById('app')
)

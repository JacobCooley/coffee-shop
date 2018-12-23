import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Home from '@home/HomeContainer'
import Header from './header/HeaderComponent'
import Dapps from '@dapps'
import Deploy from '@deploy'
import './App.scss'

class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Header />
					<main>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/dapps' component={Dapps} />
							<Route path='/deploy' component={Deploy} />
						</Switch>
					</main>
				</>
			</Router>
		)
	}
}

export default App
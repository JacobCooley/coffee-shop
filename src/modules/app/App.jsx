import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Home from '@home/HomeContainer'
import Header from '@app/header/HeaderComponent'
import Create from '@create/Create'
import './App.scss'

class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Header />
					<main>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/create' component={Create} />
						</Switch>
					</main>
				</div>
			</Router>
		)
	}
}

export default App
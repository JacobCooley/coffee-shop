import React from 'react'
import './Create.scss'
import Chains from './components/Chains'
import EthToken from './components/EthToken'
import Ethereum from './components/Ethereum'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Create = ({ match }) => (
	<div className='create'>
		<>
			<Switch>
				<Route exact path={match.url} component={Chains} />
				<Route exact path={`${match.url}/ethereum`} component={Ethereum} />
				<Route path={`${match.url}/ethtoken`} component={EthToken} />
			</Switch>
		</>
	</div>
)

Create.propTypes = {}

Create.defaultProps = {}

export default Create
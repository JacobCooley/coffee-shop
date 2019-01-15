import {web3} from '@common/utils/web3'
import { connect } from 'react-redux'
import App from './App'
import { operations } from './duck'

const mapStateToProps = state => {
	return { ...state }
}

const mapDispatchToProps = dispatch => {
	const dispatchEthModule = () => {
		dispatch(operations.dispatchWeb3(web3))
	}
	const checkAuth = () => {
		return dispatch(operations.checkAuthorization())
	}
	const logOut = () => {
		dispatch(operations.logout())
	}
	return {
		dispatchEthModule,
		checkAuth,
		logOut
	}
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default AppContainer
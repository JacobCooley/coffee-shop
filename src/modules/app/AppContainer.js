import web3 from '@common/utils/web3'
import { connect } from 'react-redux'
import App from './App'
import { dispatchWeb3 } from './duck/reducers'

const mapStateToProps = state => {
	return { ...state }
}

const mapDispatchToProps = dispatch => {
	const dispatchEthModule = () => {
		dispatch(dispatchWeb3(web3))
	}
	
	return {
		dispatchEthModule
	}
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default AppContainer
import { connect } from 'react-redux'
import PaymentComponent from './PaymentComponent'
import { operations as appOperations } from '@app/duck'

const mapStateToProps = state => {
	return {
		deploy: state.deploy,
		web3: state.global.web3
	}
}

const mapDispatchToProps = dispatch => {
	const getContracts = () => {
		dispatch(appOperations.getContracts())
	}
	return {
		dispatch,
		getContracts
	}
}

const PaymentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PaymentComponent)

export default PaymentContainer
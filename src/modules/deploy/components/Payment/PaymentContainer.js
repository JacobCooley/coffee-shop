import { connect } from 'react-redux'
import PaymentComponent from './PaymentComponent'
import { operations } from '../../duck'

const mapStateToProps = state => {
	return {
		deploy: state.deploy,
		web3: state.global.web3
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch
	}
}

const PaymentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PaymentComponent)

export default PaymentContainer
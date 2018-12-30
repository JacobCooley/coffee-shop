import { connect } from 'react-redux'
import PaymentComponent from './PaymentComponent'
import { operations } from '../../duck'

const mapStateToProps = state => {
	return {
		create: state.create,
		web3: state.global.web3
	}
}

const mapDispatchToProps = dispatch => {
	const onChange = (e) => {
		const change = {}
		const name = e.label ? 'decimal' : e.target.name
		const value = e.value ? e.value : e.target.value
		change[name] = value
		dispatch(operations.updateInput(change))
	}
	
	return {
		onChange,
		dispatch,
	}
}

const PaymentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PaymentComponent)

export default PaymentContainer
import { connect } from 'react-redux'
import Erc20Component from './Erc20Component'
import { operations } from '../../../duck'

const mapStateToProps = state => {
	return {
		deploy: state.deploy,
		web3: state.global.web3,
		user: state.global.user
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

const ContractContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Erc20Component)

export default ContractContainer
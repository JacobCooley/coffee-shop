import { connect } from 'react-redux'
import EthTokenComponent from './EthTokenComponent'
import { formOperations } from '@ethtoken/duck/index'

const mapStateToProps = state => {
	return { create: state.create }
}

const mapDispatchToProps = dispatch => {
	const onChange = (e) => {
		const change = {}
		const name = e.label ? 'decimal' : e.target.name
		const value = e.value ? e.value : e.target.value
		change[name] = value
		dispatch(formOperations.updateInput(change))
	}
	
	return {
		onChange,
		dispatch
	}
}

const EthTokenContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(EthTokenComponent)

export default EthTokenContainer
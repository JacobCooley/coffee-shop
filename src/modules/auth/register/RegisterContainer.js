import { connect } from 'react-redux'
import RegisterComponent from './RegisterComponent'
import { operations } from '../duck'
import disableAuthenticated from '@common/hocs/disableAuthenticated'

const mapStateToProps = state => {
	return {auth: state.auth}
}

const mapDispatchToProps = dispatch => {
	const onChange = (e) => {
		const change = {}
		const name = e.target.name
		change[name] = e.target.value
		dispatch(operations.updateInput(change))
	}
	
	return {
		onChange,
		dispatch,
	}
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(disableAuthenticated(RegisterComponent))

export default RegisterContainer
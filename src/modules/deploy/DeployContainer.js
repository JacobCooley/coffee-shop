import { connect } from 'react-redux'
import DeployComponent from './DeployComponent'

const mapStateToProps = state => {
	return {
		create: state.create
	}
}
const DeployContainer = connect(
	mapStateToProps
)(DeployComponent)

export default DeployContainer
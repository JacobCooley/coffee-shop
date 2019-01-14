import { connect } from 'react-redux'
import DeployComponent from './DeployComponent'

const mapStateToProps = state => {
	return {
		deploy: state.deploy
	}
}
const DeployContainer = connect(
	mapStateToProps
)(DeployComponent)

export default DeployContainer
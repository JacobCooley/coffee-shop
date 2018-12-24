import { connect } from 'react-redux'
import PreviewToken from './PreviewToken'

const mapStateToProps = state => {
	return {create: state.create}
}

const PreviewTokenContainer = connect(mapStateToProps)(PreviewToken)

export default PreviewTokenContainer
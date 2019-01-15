import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { authorization: state.authorization }
}

export default ChildComponent => connect(mapStateToProps)(class authenticatedComponent extends Component {
	
	componentWillMount() {
		if(!this.props.authorization){
			this.props.history.push('/login')
		}
	}
	
	render() {
		return <>
			<ChildComponent {...this.props} />
		</>
	}
})
import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { user: state.global.user }
}

export default ChildComponent => connect(mapStateToProps)(class authenticatedComponent extends Component {
	componentWillMount() {
		this.shouldNavToLogin()
	}
	
	componentWillUnmount(){
		this.shouldNavToLogin()
	}
	
	shouldNavToLogin(){
		if(!this.props.user){
			this.props.history.push('/login')
		}
	}
	
	render() {
		return <>
			<ChildComponent {...this.props} />
		</>
	}
})
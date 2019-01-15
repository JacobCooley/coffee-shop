import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { user: state.global.user }
}

export default ChildComponent => connect(mapStateToProps)(class authenticatedComponent extends Component {
	componentWillMount() {
		this.shouldNavToHome()
	}
	
	componentWillUnmount(){
		this.shouldNavToHome()
	}
	
	shouldNavToHome(){
		if(this.props.user){
			this.props.history.push('/')
		}
	}
	
	render() {
		return <>
			<ChildComponent {...this.props} />
		</>
	}
})
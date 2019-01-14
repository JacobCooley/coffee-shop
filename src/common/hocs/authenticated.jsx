import React, { Component } from 'react'
import fetch from 'cross-fetch'
import { server } from '../../config'

export default ChildComponent => class authenticatedComponent extends Component {
	componentDidMount() {
		fetch(`${server}/user`, {
			method: "GET",
			credentials: "include"
		}).then(response => response.json())
			.then(json => {
				console.log('json', json)
			}).catch(err => {
			this.props.history.push('/login')
			console.log('err', err)
		})
	}
	
	render() {
		return <ChildComponent {...this.props} />
	}
}
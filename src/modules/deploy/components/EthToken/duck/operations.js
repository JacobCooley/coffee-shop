import fetch from 'cross-fetch'
import { Creators } from './actions'
import { server } from '../../../../../common/utils/constants'

const updateInput = Creators.updateInput
const requestCreateTokenAction = Creators.requestCreateToken
const receiveCreateTokenAction = Creators.receiveCreateToken
const addError = Creators.addError

const createToken = (tokenInfo) => {
	return dispatch => {
		dispatch(requestCreateTokenAction())
		return fetch(`${server}/ethereum/createToken`, {
			method: "POST",
			body: JSON.stringify(tokenInfo),
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "same-origin"
		}).then(response => response.json())
			.then(json => {
				const responseData = json
				let data = []
				responseData.data.children.map(child => {
					const childData = {
						title: child.data.title,
						url: child.data.permalink
					}
					data.push(childData)
					return null
				})
				console.log('data', data)
				dispatch(receiveCreateTokenAction(data))
			}).catch(err => {
				dispatch(addError(err))
			})
	}
}

export default {
	updateInput,
	createToken
}
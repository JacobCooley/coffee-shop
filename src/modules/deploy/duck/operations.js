import fetch from 'cross-fetch'
import { Creators } from './actions'
import { server } from '@common/utils/constants'
const updateInput = Creators.updateInput
const requestCreateTokenAction = Creators.requestCreateToken
const receiveCreateTokenAction = Creators.receiveCreateToken
const addError = Creators.addError
const tick = Creators.tick
const setTick = Creators.setTick
const setContract = Creators.setContract

const setTickInterval = (interval, dispatch) => new Promise((resolve, reject) => {
	dispatch(setTick(interval))
	resolve()
})

const createToken = (tokenInfo) => {
	return dispatch => {
		dispatch(requestCreateTokenAction())
		return fetch(`${server}/erc20`, {
			method: "POST",
			body: JSON.stringify(tokenInfo),
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "same-origin"
		}).then(response => response.json())
			.then(json => {
				dispatch(receiveCreateTokenAction(json))
			}).catch(err => {
				dispatch(addError(err))
			})
	}
}

export default {
	updateInput,
	createToken,
	tick,
	setTickInterval,
	setContract,
	receiveCreateTokenAction,
	setTick
}
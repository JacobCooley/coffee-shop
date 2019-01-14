import fetch from 'cross-fetch'
import { Creators } from './actions'
import { server } from '@src/config'
import {  toast } from 'react-toastify'
const updateInput = Creators.updateInput
const requestCreateTokenAction = Creators.requestCreateToken
const receiveCreateTokenAction = Creators.receiveCreateToken
const tick = Creators.tick
const setTick = Creators.setTick
const setContract = Creators.setContract
const setStatus = Creators.setStatus

const setTickInterval = (interval, dispatch) => new Promise((resolve) => {
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
				console.log('err',err)
				toast("Could not connect to server", {type: 'error'})
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
	setTick,
	setStatus
}
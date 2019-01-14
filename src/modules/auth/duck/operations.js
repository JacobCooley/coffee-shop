import { Creators } from './actions'

const updateInput = Creators.updateInput
const authLogin = Creators.authLogin
const authRegister = Creators.authRegister
import fetch from 'cross-fetch'
import { server } from '@src/config'
import { toast } from 'react-toastify'

const login = (auth) => {
	return dispatch => {
		return fetch(`${server}/login`, {
			method: "POST",
			body: JSON.stringify(auth),
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include"
		}).then(response => response.json())
			.then(json => {
				console.log('json', json)
				dispatch(authLogin(json))
			}).catch(err => {
				console.log('err', err)
				toast("Could not connect to server", { type: 'error' })
			})
	}
}

const register = (auth) => {
	return dispatch => {
		return fetch(`${server}/register`, {
			method: "POST",
			body: JSON.stringify(auth),
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include"
		}).then(response => response.json())
			.then(json => {
				console.log('json', json)
				dispatch(authRegister(json))
			}).catch(err => {
				console.log('err', err)
				toast("Could not connect to server", { type: 'error' })
			})
	}
}

export default {
	updateInput,
	login,
	register
}
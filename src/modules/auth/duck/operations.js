import { Creators } from './actions'
import fetch from 'cross-fetch'
import { server } from '@src/config'
import { toast } from 'react-toastify'

const updateInput = Creators.updateInput
const authLogin = Creators.authLogin
const authRegister = Creators.authRegister

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
				console.log('login', json)
				dispatch(authLogin(json))
			}).catch(err => {
				console.log('err', err)
				toast("Could not login, check your information", { type: 'error' })
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
				console.log('register', json)
				dispatch(authRegister(json))
			}).catch(err => {
				console.log('err', err)
				toast("Account may already exist", { type: 'error' })
			})
	}
}

export default {
	updateInput,
	login,
	register
}
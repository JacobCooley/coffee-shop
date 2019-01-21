import { Creators } from './actions'
import fetch from 'cross-fetch'
import { server } from '@src/config'
import { toast } from 'react-toastify'
import { checkAuthorization } from '@app/duck/operations'
const updateInput = Creators.updateInput
const authLogin = Creators.authLogin
const authRegister = Creators.authRegister

const login = (auth) => {
	return async dispatch => {
		try {
			const fetchResponse = await fetch(`${server}/login`, {
				method: "POST",
				body: JSON.stringify(auth),
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include"
			})
			const jsonResponse = await fetchResponse.json()
			console.log('login', jsonResponse)
			dispatch(checkAuthorization())
			return dispatch(authLogin(jsonResponse))
		} catch (err) {
			console.log('err', err)
			toast("Could not login, check your information", { type: 'error' })
		}
	}
}

const register = (auth) => {
	return async dispatch => {
		try {
			const fetchResponse = await fetch(`${server}/register`, {
				method: "POST",
				body: JSON.stringify(auth),
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include"
			})
			const jsonResponse = await fetchResponse.json()
			console.log('register', jsonResponse)
			dispatch(authRegister(jsonResponse))
		} catch (err) {
			console.log('err', err)
			toast("Account may already exist", { type: 'error' })
		}
	}
}

export default {
	updateInput,
	login,
	register
}
import fetch from 'cross-fetch'
import { Creators } from './actions'
import { server } from '@src/config'

const dispatchWeb3 = Creators.dispatchWeb3
const dispatchCheckAuth = Creators.checkAuth
const dispatchContracts = Creators.getContracts

export const checkAuthorization = () => {
	return async dispatch => {
		try {
			const fetchResponse = await fetch(`${server}/user`, {
				method: "GET",
				credentials: "include"
			})
			if (fetchResponse.status === 200) {
				const jsonResponse = await fetchResponse.json()
				console.log('user', jsonResponse)
				dispatch(dispatchCheckAuth(jsonResponse))
				dispatch(getContracts())
			}
		} catch (err) {
			dispatch(dispatchCheckAuth(null))
			console.log('err', err)
		}
	}
}

export const getContracts = () => {
	return async dispatch => {
		try {
			const fetchResponse = await fetch(`${server}/contracts`, {
				method: "POST",
				credentials: "include"
			})
			const jsonResponse = await fetchResponse.json()
			console.log('contracts', jsonResponse)
			dispatch(dispatchContracts(jsonResponse))
		} catch (err) {
			dispatch(dispatchContracts([]))
			console.log('err', err)
		}
	}
}

export const logout = () => {
	return async dispatch => {
		try {
			const fetchResponse = await fetch(`${server}/logout`, {
				method: "POST",
				credentials: "include"
			})
			const jsonResponse = await fetchResponse.json()
			console.log('logout', jsonResponse)
			dispatch(dispatchCheckAuth(null))
		} catch (err) {
			console.log('err', err)
		}
	}
}

export default {
	checkAuthorization,
	dispatchWeb3,
	logout,
	getContracts
}
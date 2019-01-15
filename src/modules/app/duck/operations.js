import fetch from 'cross-fetch'
import { Creators } from './actions'
import { server } from '@src/config'

export const dispatchWeb3 = Creators.dispatchWeb3
export const dispatchCheckAuth = Creators.checkAuth
export const dispatchContracts = Creators.getContracts

export const checkAuthorization = () => {
	return dispatch => {
		return fetch(`${server}/user`, {
			method: "GET",
			credentials: "include"
		}).then(response => response.json())
			.then(json => {
				console.log('json', json)
				dispatch(dispatchCheckAuth(json))
			}).catch(err => {
				dispatch(dispatchCheckAuth(null))
					console.log('err', err)
				})
	}
}

export const getContracts = () => {
	return dispatch => {
		return fetch(`${server}/contracts`, {
			method: "POST",
			credentials: "include"
		}).then(response => response.json())
			.then(json => {
				console.log('contracts', json)
				dispatch(dispatchContracts(json))
			}).catch(err => {
				dispatch(dispatchContracts([]))
				console.log('err', err)
			})
	}
}

export const logout = () => {
	return dispatch => {
		return fetch(`${server}/logout`, {
			method: "POST",
			credentials: "include"
		}).then(response => response.json())
			.then(json => {
				console.log('json', json)
				dispatch(dispatchCheckAuth(json))
			}).catch(err => {
					dispatch(dispatchCheckAuth(null))
					console.log('err', err)
				}
			)
	}
}

export default {
	checkAuthorization,
	dispatchWeb3,
	logout,
	getContracts
}
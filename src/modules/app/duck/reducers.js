import { createReducer } from 'reduxsauce'
import { createActions } from 'reduxsauce';
import fetch from "cross-fetch"
import { server } from '@src/config'
import { toast } from 'react-toastify'
const { Creators, Types } = createActions({
	dispatchWeb3: ['web3'],
	checkAuth: []
});

export const INITIAL_STATE = {
	web3: {},
	authorized: false
}

export const dispatchWeb3 = Creators.dispatchWeb3
export const dispatchCheckAuth = Creators.checkAuth

export const checkAuthorization = () => {
	return dispatch => {
		return fetch(`${server}/user`, {
			method: "GET",
			credentials: "include"
		}).then(response => response.json())
			.then(json => {
				console.log('json', json)
				dispatch(dispatchCheckAuth(true))
			}).catch(err => {
				dispatch(dispatchCheckAuth(false))
				console.log('err', err)
			}
		)
	}
}


export const check_auth = (state = INITIAL_STATE, action) => {
	const { authorized } = action
	return {
		...state,
		authorized: authorized
	}
}

export const dispatch_web3 = (state = INITIAL_STATE, action) => {
	const { web3 } = action
	return {
		...state,
		web3: web3
	}
}

export const HANDLERS = {
	[Types.DISPATCH_WEB3]: dispatch_web3,
	[Types.CHECK_AUTH]: check_auth,
}

export default createReducer(INITIAL_STATE, HANDLERS)
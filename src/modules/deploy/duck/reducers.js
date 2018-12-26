import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
	loading: false,
	tokenInfo: {
		name: 'JAKE',
		'creator-address': '0x9561FaB0bdC2c974BB3B121ec904118000bC1eF5',
		symbol: 'JAC',
		supply: '100000000',
		decimal: '10'
	},
	tick: 0,
	error: ''
}

export const tick = (state = INITIAL_STATE) => {
	return {
		...state,
		tick: state.tick - 1
	}
}

export const setTick = (state = INITIAL_STATE, action) => {
	const { tick } = action
	return {
		...state,
		tick: tick
	}
}

export const update_input = (state = INITIAL_STATE, action) => {
	const { tokenInfo } = action
	return {
		...state,
		error: false,
		tokenInfo: {
			...state.tokenInfo,
			...tokenInfo
		}
	}
}

export const request_create_token = (state = INITIAL_STATE) => {
	return {
		...state,
		loading: true,
		error: false
	}
}

export const add_error = (state = INITIAL_STATE, action) => {
	return {
		...state,
		error: true,
		loading: false
	}
}

export const receive_create_token = (state = INITIAL_STATE, action) => {
	const { paymentInfo } = action
	return {
		...state,
		paymentInfo,
		loading: false
		
	}
}

export const HANDLERS = {
	[Types.UPDATE_INPUT]: update_input,
	[Types.RECEIVE_CREATE_TOKEN]: receive_create_token,
	[Types.REQUEST_CREATE_TOKEN]: request_create_token,
	[Types.ADD_ERROR]: add_error,
	[Types.TICK]: tick,
	[Types.SET_TICK]: setTick,
}

export default createReducer(INITIAL_STATE, HANDLERS)
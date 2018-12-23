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
	}
}

export const update_input = (state = INITIAL_STATE, action) => {
	const { tokenInfo } = action
	return {
		...state,
		tokenInfo: {
			...state.tokenInfo,
			...tokenInfo
		}
	}
}

export const request_create_token = (state = INITIAL_STATE, action) => {
	return {
		...state,
		loading: true
	}
}

export const receive_create_token = (state = INITIAL_STATE, action) => {
	const { tokenData } = action
	return {
		...state,
		tokenData,
		loading: false
		
	}
}

export const HANDLERS = {
	[Types.UPDATE_INPUT]: update_input,
	[Types.RECEIVE_CREATE_TOKEN]: receive_create_token,
	[Types.REQUEST_CREATE_TOKEN]: request_create_token
}

export default createReducer(INITIAL_STATE, HANDLERS)
import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
	loading: false,
	tokenInfo: {
		// contract: '0xoifejoisdjfosadijfsoiafdjaregdgisdjf',
		// name: 'JAKE',
		// owner: '0x89EfC581789086C6C7257448ae2F4a1C8D2561Be',
		// symbol: 'JAC',
		// supply: '100000000',
		// decimal: '10'
		name: '',
		owner: '',
		symbol: '',
		supply: '100000000',
		decimal: '18'
	},
	// paymentInfo: {
	// 	depositAddress: '0xfdskjdsfjdfskj',
	// 	priceInWei: '100000000000000',
	// 	timeoutInSeconds: 500
	// },
	status:{
		error: {}
	},
	tick: 0
}

export const tick = (state = INITIAL_STATE) => {
	return {
		...state,
		tick: state.tick - 1
	}
}

export const set_tick = (state = INITIAL_STATE, action) => {
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

export const set_contract = (state = INITIAL_STATE, action) => {
	const { contract } = action
	return {
		...state,
		tokenInfo: {
			...state.tokenInfo,
			contract: contract
		}
	}
}

export const set_status = (state = INITIAL_STATE, action) => {
	const { status } = action
	return {
		...state,
		status: {
			...state.status,
			...status
		}
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
	[Types.TICK]: tick,
	[Types.SET_TICK]: set_tick,
	[Types.SET_CONTRACT]: set_contract,
	[Types.SET_STATUS]: set_status,
}

export default createReducer(INITIAL_STATE, HANDLERS)
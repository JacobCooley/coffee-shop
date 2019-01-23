import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
	loading: false,
	deployInfo: {},
	status:{
		error: {}
	},
	type: 'erc20',
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
	const { deployInfo } = action
	return {
		...state,
		error: false,
		deployInfo: {
			...state.deployInfo,
			...deployInfo
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
		deployInfo: {
			...state.deployInfo,
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

export const set_type = (state = INITIAL_STATE, action) => {
	const { contractType } = action
	let deployInfo
	switch(contractType){
		default:
			deployInfo = {
				name: '',
				symbol: '',
				owner: '',
				supply: '',
				decimal: '18'
			}
	}
	return {
		...state,
		deployInfo,
		type: contractType
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
	[Types.CONTRACT_TYPE]: set_type,
	[Types.RECEIVE_CREATE_TOKEN]: receive_create_token,
	[Types.REQUEST_CREATE_TOKEN]: request_create_token,
	[Types.TICK]: tick,
	[Types.SET_TICK]: set_tick,
	[Types.SET_CONTRACT]: set_contract,
	[Types.SET_STATUS]: set_status,
}

export default createReducer(INITIAL_STATE, HANDLERS)
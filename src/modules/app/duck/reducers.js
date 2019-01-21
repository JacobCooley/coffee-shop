import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
	web3: {},
	user: null,
	contracts: null
}

export const check_auth = (state = INITIAL_STATE, action) => {
	const { user } = action
	return {
		...state,
		user
	}
}

export const get_contracts = (state = INITIAL_STATE, action) => {
	const { contracts } = action
	return {
		...state,
		contracts
	}
}

export const dispatch_web3 = (state = INITIAL_STATE, action) => {
	const { web3 } = action
	return {
		...state,
		web3
	}
}

export const HANDLERS = {
	[Types.DISPATCH_WEB3]: dispatch_web3,
	[Types.CHECK_AUTH]: check_auth,
	[Types.GET_CONTRACTS]: get_contracts,
}

export default createReducer(INITIAL_STATE, HANDLERS)
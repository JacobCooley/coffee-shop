import { createReducer } from 'reduxsauce'
import { createActions } from 'reduxsauce';
const { Creators, Types } = createActions({
	dispatchWeb3: ['web3']
});

export const INITIAL_STATE = {
	web3: {}
}

export const dispatchWeb3 = Creators.dispatchWeb3

export const dispatch_web3 = (state = INITIAL_STATE, action) => {
	const { web3 } = action
	return {
		...state,
		web3: web3
	}
}

export const HANDLERS = {
	[Types.DISPATCH_WEB3]: dispatch_web3,
}

export default createReducer(INITIAL_STATE, HANDLERS)
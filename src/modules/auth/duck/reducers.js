import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
	loading: false,
	email: '',
	pass: '',
	passVerify: '',
}

export const update_input = (state = INITIAL_STATE, action) => {
	const { auth } = action
	return {
		...state,
		...auth
	}
}

export const auth_login = (state = INITIAL_STATE, action) => {
	const { login } = action
	return {
		...state,
		login: {
			...login
		}
	}
}

export const auth_register = (state = INITIAL_STATE, action) => {
	const { register } = action
	return {
		...state,
		register: {
			...register
		}
	}
}

export const HANDLERS = {
	[Types.UPDATE_INPUT]: update_input,
	[Types.AUTH_LOGIN]: auth_login,
	[Types.AUTH_REGISTER]: auth_register
}

export default createReducer(INITIAL_STATE, HANDLERS)
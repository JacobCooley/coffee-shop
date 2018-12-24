import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    updateInput: ['tokenInfo'],
	requestCreateToken: [],
	receiveCreateToken: ['tokenData'],
	addError: ['error']
});

export { Creators, Types };
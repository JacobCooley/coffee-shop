import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    updateInput: ['tokenInfo'],
	requestCreateToken: [],
	receiveCreateToken: ['paymentInfo'],
	addError: ['error'],
	tick: [],
	setTick: ['tick']
});

export { Creators, Types };

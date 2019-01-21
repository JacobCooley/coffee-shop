import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    updateInput: ['tokenInfo'],
    contractType: ['contractType'],
	requestCreateToken: [],
	receiveCreateToken: ['paymentInfo'],
	tick: [],
	setTick: ['tick'],
	setContract: ['contract'],
	setStatus: ['status']
});

export { Creators, Types };


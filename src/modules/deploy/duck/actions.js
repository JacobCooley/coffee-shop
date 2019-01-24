import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    updateInput: ['deployInfo'],
    contractType: ['contractType'],
	requestCreateToken: [],
	receiveCreateToken: ['paymentInfo'],
	tick: [],
	setTick: ['tick'],
	setContract: ['contract'],
	setStep: ['step']
});

export { Creators, Types };


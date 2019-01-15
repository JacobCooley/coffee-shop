import { createActions } from 'reduxsauce'

const { Creators, Types } = createActions({
	dispatchWeb3: ['web3'],
	checkAuth: ['user']
});

export { Creators, Types };
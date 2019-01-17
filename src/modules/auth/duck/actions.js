import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    updateInput: ['auth'],
    authLogin: ['login'],
    authRegister: ['register'],
    authContracts: ['contracts'],
});

export { Creators, Types };


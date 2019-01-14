import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    updateInput: ['auth'],
    authLogin: ['login'],
    authRegister: ['register'],
});

export { Creators, Types };


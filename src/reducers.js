import { combineReducers } from 'redux';
import createTokenForm from '@ethtoken/duck/reducers'
const rootReducer = combineReducers({
    create: createTokenForm
});

export default rootReducer;
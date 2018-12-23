import { combineReducers } from 'redux';
import createTokenForm from '@deploy/components/EthToken/duck/reducers'
const rootReducer = combineReducers({
    create: createTokenForm
});

export default rootReducer;
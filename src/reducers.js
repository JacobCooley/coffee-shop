import { combineReducers } from 'redux';
import createTokenForm from '@ethereum/components/EthToken/duck/reducers'
const rootReducer = combineReducers({
    create: createTokenForm
});

export default rootReducer;
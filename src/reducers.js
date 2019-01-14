import { combineReducers } from 'redux';
import deployReducer from '@deploy/duck/reducers'
import appReducer from '@app/duck/reducers'
import authReducer from '@auth/duck/reducers'
const rootReducer = combineReducers({
    global: appReducer,
    deploy: deployReducer,
    auth: authReducer
});

export default rootReducer;
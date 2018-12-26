import { combineReducers } from 'redux';
import createReducer from '@deploy/duck/reducers'
import appReducer from '@app/duck/reducers'
const rootReducer = combineReducers({
    global: appReducer,
    create: createReducer
});

export default rootReducer;
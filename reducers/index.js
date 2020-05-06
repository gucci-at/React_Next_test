import { combineReducers } from 'redux';
import counter from './counter';
import clock from './clock'
import districts from './districts';

const rootReducer = combineReducers({
    clock,
    counter,
    districts,
});

export default rootReducer;
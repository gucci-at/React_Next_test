import { combineReducers } from 'redux';
import counter from './counter';
import clock from './clock'
import districts from './districts';
import { person } from './person';

const rootReducer = combineReducers({
    clock,
    counter,
    districts,
    person,
});

export default rootReducer;
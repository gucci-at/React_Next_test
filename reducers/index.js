import { combineReducers } from 'redux';
import counter from './counter';
import districts from './districts';

const rootReducer = combineReducers({
    counter,
    districts,
});

export default rootReducer;
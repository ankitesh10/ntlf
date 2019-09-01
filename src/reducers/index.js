import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import optionsReducer from './optionsReducer';


export default combineReducers({
    sessions: sessionReducer,
    options: optionsReducer
});
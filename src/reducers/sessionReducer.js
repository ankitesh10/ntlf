import _ from 'lodash';
import { FETCH_SESSIONS, UPDATE_SESSIONS } from '../actions/types';

export default (state={}, action ) => {
    switch (action.type){
        case FETCH_SESSIONS :
            return {...state, ..._.mapKeys(action.payload, 'event_key')};
        case UPDATE_SESSIONS:
            return _.pick(state, action.payload);    
        default:
            return state
    }

}
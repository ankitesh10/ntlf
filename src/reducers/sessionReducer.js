import _ from 'lodash';
import { FETCH_SESSIONS } from '../actions/types';

export default (state={}, action ) => {
    switch (action.type){
        case FETCH_SESSIONS :
            return {...state, ..._.mapKeys(action.payload, 'event_key')};
        default:
            return state
    }

}
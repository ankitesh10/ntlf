import nasscom from '../apis/nasscom';
import { KEY } from '../apis/key';


import {FETCH_SESSIONS} from './types';


export const fetchSessions = () => async dispatch => {
    const response = await nasscom.get(`session/export?api_key=${KEY}&format=json`);

    dispatch({type: FETCH_SESSIONS, payload: response.data})
}
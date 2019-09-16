import nasscom from "../apis/nasscom";
import { KEY } from "../apis/key";

import {
  FETCH_SESSIONS,
  SELECT_DAY,
  UPDATE_SESSIONS,
  UPDATE_SESSIONS_KEYS,
  UPDATE_VENUES,
  UPDATE_TYPES,
  SELECT_VENUE,
  SELECT_TYPE
} from "./types";

export const fetchSessions = () => async dispatch => {
  const response = await nasscom.get(
    `session/export?api_key=${KEY}&format=json`
  );

  dispatch({ type: FETCH_SESSIONS, payload: response.data });
};

export const updateSessions = key => {
  return { type: UPDATE_SESSIONS, payload: key };
};


export const updateVenues = venues => {
  return { type: UPDATE_VENUES, payload: venues}
}


export const updateTypes = types => {
  return { type: UPDATE_TYPES, payload: types}
}

export const updateSessionsKeys = keys => {
  return {type: UPDATE_SESSIONS_KEYS, payload: keys};
}

export const selectDay = day => {
  return { type: SELECT_DAY, payload: day };
};

export const selectVenue = venue => {
  return { type: SELECT_VENUE, payload: venue };
};

export const selectType = type => {
  return { type: SELECT_TYPE, payload: type };
};

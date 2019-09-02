import nasscom from "../apis/nasscom";
import { KEY } from "../apis/key";

import {
  FETCH_SESSIONS,
  SELECT_DAY,
  FETCH_VENUES_TYPES,
  FETCH_VENUES,
  EMPTY_VENUES,
  SELECT_VENUE,
  SELECT_TYPE
} from "./types";

//https://nasscomtechnologyleadership2019.sched.com/api/site/sync?api_key=a279dc441b8e6b2f46cb0a2f325b38d7&format=json&modify_date=0

export const fetchSessions = () => async dispatch => {
  const response = await nasscom.get(
    `session/export?api_key=${KEY}&format=json`
  );

  dispatch({ type: FETCH_SESSIONS, payload: response.data });
};

export const fetchVenuesAndTypes = () => async dispatch => {
  const response = await nasscom.get(
    `/site/sync?api_key=${KEY}&format=json&modify_date=0`
  );

  dispatch({ type: FETCH_VENUES_TYPES, payload: response.data });
};

export const fetchVenues = () => async dispatch => {
  const response = await nasscom.get(
    `/site/sync?api_key=${KEY}&format=json&modify_date=0`
  );

  dispatch({ type: FETCH_VENUES, payload: response.data });
};

export const emptyVenues = () => {
    return {type: EMPTY_VENUES}
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

import _ from "lodash";
import {
  FETCH_SESSIONS,
  UPDATE_SESSIONS,
  UPDATE_SESSIONS_KEYS
} from "../actions/types";

const INITIAL_STATE = {
  sessionsList: {},
  activeKeys: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SESSIONS:
      return { ...state, sessionsList: _.mapKeys(action.payload, "event_key") };
    case UPDATE_SESSIONS_KEYS:
      return { ...state, activeKeys: [...action.payload] };
    case UPDATE_SESSIONS:
      return _.pick(state, action.payload);
    default:
      return state;
  }
};

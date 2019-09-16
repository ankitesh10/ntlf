// import _ from "lodash";

import {
  UPDATE_VENUES,
  UPDATE_TYPES,
  SELECT_DAY,
  SELECT_VENUE,
  SELECT_TYPE
} from "../actions/types";

const INITIAL_STATE = {
  day: 1,
  venues: {},
  types: {},
  selectedVenue: "all",
  selectedType: "all"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_VENUES:
      return { ...state, venues: action.payload };
    case UPDATE_TYPES:
      return { ...state, types: action.payload };
    case SELECT_DAY:
      return { ...state, day: action.payload };
    case SELECT_VENUE:
      return { ...state, selectedVenue: action.payload };
    case SELECT_TYPE:
      return { ...state, selectedType: action.payload };
    default:
      return state;
  }
};

import _ from 'lodash';

import { SELECT_DAY,FETCH_VENUES_TYPES ,SELECT_VENUE, SELECT_TYPE } from "../actions/types";

const INITIAL_STATE = {
  day: 1,
  venues: {},
  types: {},
  selectedVenue: "",
  selectedType: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_DAY:
      return { ...state, day: action.payload };
    case FETCH_VENUES_TYPES:
      return { ...state, venues: action.payload.venues, types: _.mapKeys(action.payload.type, 'id') };
    case SELECT_VENUE:
      return { ...state, selectedVenue: action.payload };
    case SELECT_TYPE:
      return { ...state, selectedType: action.payload };
    default:
      return state;
  }
};

import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import {
  fetchSessions,
  updateSessions,
  updateSessionsKeys
} from "../../actions";

class SessionList extends React.Component {
  componentDidMount() {
    this.props.fetchSessions();
  }

  componentDidUpdate(ownProps) {
    const updatedSessionKeys = this.getUpdatedSessionsKeys();


    if (
      !_.isEqual(ownProps.activeKeys, updatedSessionKeys) &&
      updatedSessionKeys.length > 0
    ) {
      this.props.updateSessionsKeys(updatedSessionKeys);
    }
  }

  getUpdatedSessionsKeys = () => {
    let updatedSessionsKeys = [];

    let sessionsValues = Object.values(this.props.sessions);

    sessionsValues.forEach(session => {
      // if only type is set to all

      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        session.venue === this.props.selectedVenue &&
        this.props.selectedType === "all"
      ) {
        updatedSessionsKeys.push(session.event_key);
      }

      // if only venue is set to all

      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        this.props.selectedVenue === "all" &&
        this.props.types[this.props.selectedType] &&
        session.event_type === this.props.types[this.props.selectedType]
      ) {
        updatedSessionsKeys.push(session.event_key);
      }

      // if both are set 

      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        session.venue === this.props.selectedVenue &&
        this.props.types[this.props.selectedType] &&
        session.event_type === this.props.types[this.props.selectedType]
      ) {
        updatedSessionsKeys.push(session.event_key);
      }

      // if both are set to all

      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        this.props.selectedVenue === "all" &&
        this.props.selectedType === "all"
      ) {
        updatedSessionsKeys.push(session.event_key);
      }
    });

    return updatedSessionsKeys;
  };

  calculateDay = startDate => {
    if (startDate === "20") {
      return 1;
    } else if (startDate === "21") {
      return 2;
    }
    return 3;
  };

  renderSession() {
    let { sessions, activeKeys } = this.props;
    return activeKeys.map(key => {
        return <li key={key}>{sessions[key].name}</li>;
    });
  }

  render() {
    return <ul>{this.renderSession()}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions.sessionsList,
    activeKeys: state.sessions.activeKeys,
    day: state.options.day,
    types: state.options.types,
    selectedVenue: state.options.selectedVenue,
    selectedType: state.options.selectedType
  };
};

export default connect(
  mapStateToProps,
  { fetchSessions, updateSessions, updateSessionsKeys }
)(SessionList);

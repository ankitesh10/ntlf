import React from "react";
import { connect } from "react-redux";

import { fetchSessions, updateSessions } from "../../actions";

class SessionList extends React.Component {
  componentDidMount() {
    this.props.fetchSessions();
  }

  calculateDay = startDate => {
    if (startDate === "20") {
      return 1;
    } else if (startDate === "21") {
      return 2;
    }
    return 3;
  };


 
  renderSession() {

    let updatedSessionsKey = [];

    return this.props.sessions.map((session, index, sessions) => {
      // if venue and type is set to all

      
      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        this.props.selectedVenue === "all" &&
        this.props.selectedType === "all"
      ) {
        return <li key={session.event_key}>{session.name}</li>;
      }

      // if only type is set to all
      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        session.venue === this.props.selectedVenue &&
        this.props.selectedType === "all"
      ) {
        updatedSessionsKey.push(session.event_key);
        // update sessions
        if(sessions.length - 1 === index){
          console.log(1);
          this.props.updateSessions(updatedSessionsKey);
        }
        return <li key={session.event_key}>{session.name}</li>;
      }

      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        this.props.selectedVenue === "all" &&
        session.event_type === this.props.types[this.props.selectedType].name
      ) {
        updatedSessionsKey.push(session.event_key);
        // update sessions
        if(sessions.length - 1 === index){
          console.log(index);
          console.log(1);
          this.props.updateSessions(updatedSessionsKey);
        }

        return <li key={session.event_key}>{session.name}</li>;
      }

    
      if(sessions.length - 1 === index){
        console.log(1);
        this.props.updateSessions(updatedSessionsKey);
      }

     

      return null;
    });
  }

  render() {
    return <ul>{this.renderSession()}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    sessions: Object.values(state.sessions),
    day: state.options.day,
    types: state.options.types,
    selectedVenue: state.options.selectedVenue,
    selectedType: state.options.selectedType
  };
};

export default connect(
  mapStateToProps,
  { fetchSessions, updateSessions }
)(SessionList);

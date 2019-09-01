import React from "react";
import { connect } from "react-redux";

import { fetchSessions } from "../../actions";

class SessionList extends React.Component {
  componentDidMount() {
    this.props.fetchSessions();
  }

  calculateDay = startDate => {
    if (startDate === '20') {
      return 1;
    } else if (startDate === '21') {
      return 2;
    }
    return 3;
  };

  renderSession() {
    return this.props.sessions.map(session => {
      if (this.calculateDay(session.event_start_day) === this.props.day) {
        return <li key={session.event_key}>{session.name}</li>;
      }
      return null;
    });
  }

  render() {
    // console.log(this.props.sessions);
    return <ul>{this.renderSession()}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    sessions: Object.values(state.sessions),
    day: state.options.day
  };
};

export default connect(
  mapStateToProps,
  { fetchSessions }
)(SessionList);

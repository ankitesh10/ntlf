import React from "react";
import { connect } from "react-redux";

import { fetchSessions, fetchVenues, emptyVenues } from "../../actions";

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
    let updatedVenue = {};
    let i = 0;


    return this.props.sessions.map( (session) => {

      // if venue and type is set to all

      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        this.props.selectedVenue === "all" &&
        this.props.selectedType === 'all'
      ) {
        return <li key={session.event_key}>{session.name}</li>;
      }

      // if only type is set to all

      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        session.venue === this.props.selectedVenue &&
        this.props.selectedType === 'all'        
      ) {

        return <li key={session.event_key}>{session.name}</li>;
      }


      // if venue is set to all

      if (
        this.calculateDay(session.event_start_day) === this.props.day &&
        this.props.selectedVenue === 'all' && 
        (session.event_type === this.props.types[this.props.selectedType].name )        
      ) {

        if(i === 0){
          this.props.emptyVenues();
        }

        console.log(i);


        updatedVenue[session.venue] = session.venue

        // console.log(sessions.length);
        // console.log(index);

        this.props.fetchVenues(updatedVenue);


        // if(index + 1 === sessions.length){
        //   console.log(updatedVenue);
        // }
        i++;
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
    day: state.options.day,
    types: state.options.types,
    selectedVenue: state.options.selectedVenue,
    selectedType: state.options.selectedType
  };
};

export default connect(
  mapStateToProps,
  { fetchSessions, fetchVenues, emptyVenues }
)(SessionList);

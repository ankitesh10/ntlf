import React from "react";
import { connect } from "react-redux";
import _ from "lodash";


import { updateVenues, selectVenue } from "../actions";

class VenueList extends React.Component {

  componentDidUpdate(ownProps) {
    const updatedVenues = this.getVenues();

    const updatedVenuesArr = Object.values(updatedVenues);

    if (
      !_.isEqual(ownProps.venues, updatedVenuesArr) &&
      updatedVenuesArr.length > 0
    ) {
      this.props.updateVenues(updatedVenues);
    }
  }


  getVenues = () => {
    let venues = {};

    const sessions = this.props.sessions;

    if (sessions){
      this.props.activeKeys.forEach(key => {
        venues[sessions[key].venue] = sessions[key].venue;
      });
    }

    return venues;
  };

  onVenueChange = venue => {
    this.props.selectVenue(venue);
  };

  renderVenue() {
    return this.props.venues.map((venue, index) => {
      return (
        <option key={index} value={venue}>
          {venue}
        </option>
      );
    });
  }

  render() {
    return (
      <select
        value={this.props.selectedVenue}
        onChange={e => this.onVenueChange(e.target.value)}
      >
        <option value="all" key="all">
          ALL
        </option>
        {this.renderVenue()}
      </select>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions.sessionsList,
    activeKeys: state.sessions.activeKeys,
    venues: Object.values(state.options.venues),
    selectedVenue: state.options.selectedVenue
  };
};

export default connect(
  mapStateToProps,
  { selectVenue, updateVenues }
)(VenueList);

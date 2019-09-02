import React from "react";
import { connect } from "react-redux";

import { selectVenue } from '../actions';


class VenueList extends React.Component {

  onVenueChange = venue => {
    //   console.log(venue);
        
      this.props.selectVenue(venue);
  }


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
    return(
        <select value={this.props.selectedVenue} onChange={(e) => this.onVenueChange(e.target.value)}>
            <option value="all" key="all">ALL</option>
            {this.renderVenue()}
        </select>
    )
  }
}

const mapStateToProps = state => {
  return {
    venues: Object.values(state.options.venues),
    selectedVenue: state.options.selectedVenue
  };
};

export default connect(
    mapStateToProps,
    {selectVenue}
    )(VenueList);

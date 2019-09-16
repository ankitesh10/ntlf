import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { updateTypes, selectType } from "../actions";

class TypeList extends React.Component {
  componentDidUpdate(ownProps) {
    const updatedTypes = this.getTypes();

    const updatedTypesArr = Object.values(updatedTypes);

    if (
      !_.isEqual(ownProps.types, updatedTypesArr) &&
      updatedTypesArr.length > 0
    ) {
      this.props.updateTypes(updatedTypes);
    }
  }

  getTypes = () => {
    let types = {};

    const sessions = this.props.sessions;

    if (sessions) {
      this.props.activeKeys.forEach(key => {
        if (sessions[key].event_type)
          types[sessions[key].event_type] = sessions[key].event_type;
      });
    }

    return types;
  };

  onTypeChange = type => {
    this.props.selectType(type);
  };

  renderType() {
    return this.props.types.map((type, index) => {
      return (
        <option value={type} key={type}>
          {type}
        </option>
      );
    });
  }

  render() {
    return (
      <select
        value={this.props.selectedType}
        onChange={e => this.onTypeChange(e.target.value)}
      >
        <option value="all" key="all">
          ALL
        </option>
        {this.renderType()}
      </select>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions.sessionsList,
    activeKeys: state.sessions.activeKeys,
    types: Object.values(state.options.types),
    selectedType: state.options.selectedType
  };
};

export default connect(
  mapStateToProps,
  { updateTypes, selectType }
)(TypeList);

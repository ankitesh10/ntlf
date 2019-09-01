import React from "react";
import { connect } from "react-redux";

import { selectType } from '../actions';


class TypeList extends React.Component {

  onTypeChange = type => {
      console.log(type);
      this.props.selectType(type);
    //   console.log(this.props.selectedType);
  }


  renderType() {
    //   console.log(this.props.types)
    return this.props.types.map((type, index) => {
      return (
        <option key={index} value={type}>
          {type}
        </option>
      );
    });
  }

  render() {
    return(
        <select value={this.props.selectedType} onChange={(e) => this.onTypeChange(e.target.value)}>
            <option value={true} key="all">ALL</option>
            {this.renderType()}
        </select>
    )
  }
}

const mapStateToProps = state => {
  return {
    types: Object.keys(state.options.types),
    selectedType: state.options.selectedType
  };
};

export default connect(
    mapStateToProps,
    {selectType}
    )(TypeList);

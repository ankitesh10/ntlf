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
    const typesKeyArr = Object.keys(this.props.types);  
    return typesKeyArr.map((type, index) => {
      return (
        <option key={index} value={type}>
          {this.props.types[type].name}
        </option>
      );
    });
  }

  render() {
    return(
        <select value={this.props.selectedType} onChange={(e) => this.onTypeChange(e.target.value)}>
            <option value="all" key="all">ALL</option>
            {this.renderType()}
        </select>
    )
  }
}

const mapStateToProps = state => {
  return {
    types: state.options.types,
    selectedType: state.options.selectedType
  };
};

export default connect(
    mapStateToProps,
    {selectType}
    )(TypeList);

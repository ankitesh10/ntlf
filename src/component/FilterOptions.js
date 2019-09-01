import React from 'react';
import { connect } from 'react-redux';

import { fetchVenuesAndTypes } from '../actions';


class FilterOptions extends React.Component {

    componentDidMount(){
        this.props.fetchVenuesAndTypes();
    }


    render(){
        return <div>Options</div>;
    }
}


export default connect(
    null,
    { fetchVenuesAndTypes }
)(FilterOptions);
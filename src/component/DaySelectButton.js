import React from 'react';
import { connect } from 'react-redux';

import { selectDay } from '../actions';



class daySelectButton extends React.Component {

    setDay = day => {
        this.props.selectDay(day);
    }

    render(){
        return(
            <div>
                <button onClick = {() => this.setDay(1)}>Day 1</button>
                <button onClick = {() => this.setDay(2)}>Day 2</button>
                <button onClick = {() => this.setDay(3)}>Day 3</button>
            </div>
        );
    }
}


// mapStateToprops = state => {
//     return {day: state.options}
// }



export default connect(
    null,
    {selectDay}
)(daySelectButton);
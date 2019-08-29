import React from "react";
import { connect } from "react-redux";

import { fetchSessions } from "../../actions";

class SessionList extends React.Component {

    componentDidMount(){
        this.props.fetchSessions();
    }

    render(){
        return <div>Session</div>
    }
}

export default connect(
  null,
  { fetchSessions }
)(SessionList);

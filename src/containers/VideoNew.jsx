import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addVideo } from "../actions";

class VideoNew extends Component {
    render() {
        return (
            <div>New Video</div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoNew);
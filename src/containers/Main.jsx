import React, {Component} from "react";
import {connect} from "react-redux";

import VideoList from "../containers/VideoList";

class Main extends Component {
    render() {
        return (
            <div className="row">
                <VideoList />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Main);
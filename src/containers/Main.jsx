import React, {Component} from "react";
import {connect} from "react-redux";

import Header from "../components/Header";
import App from "../components/App";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <br/><br/><br/>
                <App />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Main);
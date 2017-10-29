import React, {Component} from "react";
import {connect} from "react-redux";

import Header from "../components/Header";
import CardsList from "../containers/CardsList";

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
                <div className="container">
                    <div className="row">
                        <CardsList />
                    </div>

                    <hr />

                    <footer>
                        <p>&copy; Company 2017</p>
                    </footer>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Main);
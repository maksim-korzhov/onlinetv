import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchVideo } from "../actions/index";

class SearchForm extends Component {
    handleInputChange(event) {
        const name = event.target.value;

        this.props.searchVideo(name);
    }

    render() {
        return (
            <form className="col-sm-6">
                <input className="form-control col-sm-12" type="search" placeholder="Search" onChange={this.handleInputChange.bind(this)} />
            </form>
        );
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { searchVideo }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchForm);
import React, { Component } from "react";

class SearchForm extends Component {
    handleInputChange(event) {
        console.log(event);
    }

    render() {
        return (
            <form className="col-sm-6">
                <input className="form-control col-sm-12" type="search" placeholder="Search" onChange={this.handleInputChange.bind(this)} />
            </form>
        );
    }
}

export default SearchForm;
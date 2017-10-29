import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "../components/Card";

import * as actions from "../actions";


const requireProps = {
    cardsList: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        year: PropTypes.number,
        rating: PropTypes.number,
        added: PropTypes.object
    })
};

class CardsList extends Component {
    componentWillMount() {
        setTimeout(() => this.props.fetchVideoList(), 2000);
    }

    renderCardList() {
        const videoList = this.props.videoList;

        if( videoList.length > 0 ) {
            return videoList.map((item, i) => {
                return (
                    <div key={item.id} className="col-md-4">
                        <Card videoData={item}/>
                    </div>
                );
            });
        }

        return "Loading...";
    }

    render() {
        return (
            <ul className="row">
                {this.renderCardList()}
            </ul>
        );
    }
}

CardsList.requireProps = requireProps;

function mapStateToProps({ videoList }) {
    return { videoList };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( actions, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
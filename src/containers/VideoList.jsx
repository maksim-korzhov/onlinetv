import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "../components/Card";

import * as actions from "../actions";


const requireProps = {
    videos: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        year: PropTypes.number,
        rating: PropTypes.number,
        added: PropTypes.object
    })
};

class VideoList extends Component {
    componentWillMount() {
        setTimeout(() => this.props.fetchVideoList(), 2000);
    }

    renderVideoList() {
        const videoList = this.props.videoData.videos || [];

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
                {this.renderVideoList()}
            </ul>
        );
    }
}

VideoList.requireProps = requireProps;

function mapStateToProps({ videoData }) {
    return { videoData };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( actions, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
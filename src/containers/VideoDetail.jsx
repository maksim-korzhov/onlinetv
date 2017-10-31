import React, {Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVideoById } from "../actions/index";

const requireProps = {
    videoData: PropTypes.shape({
        video: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
            year: PropTypes.number,
            rating: PropTypes.number,
            added: PropTypes.object
        }).isRequired
    }).isRequired
};

class VideoDetail extends Component {
    componentWillMount() {
        this.props.fetchVideoById();
    }

    render() {
        const videoData = this.props.videoData.video || [];

        if( videoData.length === 0 ) {
            return <div>Loading...</div>;
        }

        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={videoData.picture} alt={videoData.name} />
                </div>
                <div className="col-md-8">
                    <Link className="btn btn-primary float-sm-right" to="/">X Close</Link>
                    <h1>{videoData.name}</h1>
                    <ul>
                        <li>Rating: {videoData.rating}</li>
                        <li>Year: {videoData.year}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

VideoDetail.requireProps = requireProps;

function mapStateToProps( { videoData } ) {
    return { videoData };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideoById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
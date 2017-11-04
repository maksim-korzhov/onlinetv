import React, {Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchVideoById } from "../actions/index";

const requireProps = {
    video: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        originalName: PropTypes.string,
        director: PropTypes.string,
        country: PropTypes.arrayOf( PropTypes.string ),
        genre: PropTypes.arrayOf( PropTypes.genre ),
        year: PropTypes.number,
        rating: PropTypes.number,
        description: PropTypes.string
    }).isRequired
};

class VideoDetail extends Component {
    componentWillMount() {
        const videoId = this.props.match.params.id;
        this.props.fetchVideoById(videoId);
    }

    render() {
        const video = this.props.video || [];

        if( video.length === 0 ) {
            if( this.props.isVideoLoaded ) {
                return <div>Video not found</div>;
            } else {
                return <div>Loading...</div>;
            }
        }

        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={video.picture} alt={video.name} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <Link className="btn btn-primary float-sm-right" to="/">X Close</Link>
                    <h2>{video.name} ({video.year})</h2>
                    <h5>{video.originalName}</h5>
                    <br />

                    <p><strong>Director:</strong> {video.director}</p>
                    <p><strong>Coutry:</strong> {video.country.reduce((total, current) => `${total}, ${current}`)}</p>
                    <p><strong>Type:</strong> {video.genre.reduce((total, current) => `${total}, ${current}`)}</p>
                    <p><strong>IMDb:</strong> {video.rating}</p>

                    <br/>
                    <dl>
                        <dt><strong>Description:</strong></dt>
                        <dd>{video.description}</dd>
                    </dl>
                </div>
            </div>
        );
    }
}

VideoDetail.requireProps = requireProps;

function mapStateToProps( { videoData: { video, isVideoLoaded } } ) {
    return { video, isVideoLoaded };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideoById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
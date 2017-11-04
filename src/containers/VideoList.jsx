import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "../components/Card";
import SearchForm from "../containers/SearchForm";

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
        //setTimeout(() => this.props.fetchVideoList(), 2000);
        this.props.fetchVideoList();
    }

    renderVideoList() {
        const videoList = this.props.videos || [];
        const isLoaded = this.props.isVideoListLoaded || false;

        if( videoList.length > 0 ) {
            return videoList.map((item, i) => {
                return (
                    <div key={item.id} className="col-md-3">
                        <Card videoData={item}/>
                    </div>
                );
            });
        }

        if( isLoaded ) {
            return <div className="col-sm-12">Nothing to show</div>;
        } else {
            return <div className="col-sm-12">Loading...</div>;
        }
    }

    render() {
        return (
            <div className="container videoList">
                <div className="row">
                    <SearchForm />
                </div>

                <hr/>

                <div className="row">
                    {this.renderVideoList()}
                </div>
            </div>
        );
    }
}

VideoList.requireProps = requireProps;

function mapStateToProps({ videoData: { videos, isVideoListLoaded } }) {
    return { videos, isVideoListLoaded };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( actions, dispatch );
}

VideoList = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoList;
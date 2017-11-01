import React, {Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const requireProps = {
    videoData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        year: PropTypes.number,
        rating: PropTypes.number
    }).isRequired
};

class Card extends Component {
    render() {
        const { id, name, picture, year, rating } = this.props.videoData;
        const link = `/video/${id}`;

        return (
            <div className="card">
                <img className="card-img-top" src={picture} alt={name} />
                <div className="card-block">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Year: {year}</p>
                    <p className="card-text">IMDb rating: {rating}</p>
                    <Link to={link} className="btn btn-primary">Details</Link>
                </div>
            </div>
        );
    }
}

Card.requireProps = requireProps;

export default Card;
import React, {Component} from "react";
import PropTypes from "prop-types";

import Card from "../components/Card";

const requireProps = {
    cardsList: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        year: PropTypes.number,
        rating: PropTypes.number,
        added: PropTypes.object
    })
};

class CardsList extends Component {
    componentWillMount() {
        this.props.fetchVideoList();
    }

    renderCardList() {
        return this.props.cardsList.map((item, i) => {
            return (
                <div key={item.id} className="col-md-4">
                    <Card />
                </div>
            );
        });
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

export default CardsList;
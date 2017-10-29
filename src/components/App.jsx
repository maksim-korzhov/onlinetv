import React, {Component} from "react";
import Card from "./Card";

export default class App extends Component {
    render() {
        let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const cardList = temp.map(() => <Card />);
        return (
            <div className="container">
                <div className="row">
                    {cardList}
                </div>

                <hr />

                <footer>
                    <p>&copy; Company 2017</p>
                </footer>
            </div>
        );
    }
}
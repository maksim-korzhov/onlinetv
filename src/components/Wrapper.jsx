import React from "react";
import Header from "./Header";

const Wrapper = (props) => {
    return (
        <div>
            <Header />
            <br/><br/><br/>
            <div className="container">
                {props.children}

                <hr />

                <footer>
                    <p>&copy; Company 2017</p>
                </footer>
            </div>
        </div>
    );
};

export default Wrapper;
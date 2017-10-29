import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxPromise from "redux-promise";

import Main from "./containers/Main";
import reducers from "./reducers";

import style from "../style/style.scss";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Main />
    </Provider>,
    document.getElementById("root")
);

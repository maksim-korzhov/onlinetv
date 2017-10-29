import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./containers/Main";
import VideoDetail from "./containers/VideoDetail";

import reducers from "./reducers";

import style from "../style/style.scss";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/video" component={Main}></Route>
                <Route exact path="/video/:id" component={VideoDetail}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

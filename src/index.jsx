import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxPromise from "redux-promise";
import {BrowserRouter, Route, Switch, IndexRoute} from "react-router-dom";
import {composeWithDevTools} from "redux-devtools-extension";

import Wrapper from "./components/Wrapper";
import Main from "./containers/Main";
import VideoDetail from "./containers/VideoDetail";

import reducers from "./reducers";

import style from "../style/style.scss";

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(ReduxPromise))(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Wrapper>
                <Switch>
                    <Route path="/video/new" component={VideoDetail} />
                    <Route path="/video/:id" component={VideoDetail} />
                    <Route path="/video" component={Main} />
                    <Route path="/" component={Main} />
                </Switch>
            </Wrapper>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

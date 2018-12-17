import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//import { Provider as ReduxProvider } from "react-redux";

import Layout from "./layout";
//import createStore from "./store";

//const store = createStore( window.REDUX_DATA );

const jsx = (
    <Router>
        <Layout />
    </Router>
);

const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );

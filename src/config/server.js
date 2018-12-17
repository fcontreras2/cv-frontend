import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
//import { Provider as ReduxProvider } from "react-redux";
import Helmet from "react-helmet";
import routes from "./routes";
import Layout from "./layout";

import {JssProvider, SheetsRegistry} from 'react-jss';
import { jss, generateClassName } from '../styles/theme/index';
//import createStore, { initializeSession } from "./store";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const context = { };
    //const store = createStore( );

    const sheets = new SheetsRegistry()

    const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) ) // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.serverFetch ) // check if components have data requirement
            .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement

    Promise.all( dataRequirements ).then( ( ) => {
        const jsx = (
                <StaticRouter context={ context } location={ req.url }>
                  <JssProvider jss={jss} registry={sheets} generateClassName={generateClassName}>
                    <Layout />
                  </JssProvider>
                </StaticRouter>
        );
        const reactDom = renderToString( jsx );
    //    const reduxState = store.getState( );
        const helmetData = Helmet.renderStatic( );

        res.writeHead( 200, { "Content-Type": "text/html" } );
        res.end( htmlTemplate( reactDom, helmetData, sheets) );
    } );
} );

app.listen( 8000 );

function htmlTemplate( reactDom, helmetData, sheets ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>React SSR</title>
            <style type="text/css">
              ${sheets.toString()}
            </style>
        </head>

        <body>
            <div id="app">${ reactDom }</div>
            <script src="http://localhost:9000/app.bundle.js"></script>
        </body>
        </html>
    `;
}

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// //import './styles/sass/main.scss';
// // import App from './App';
// // import { JssProvider, SheetsRegistry } from 'react-jss'
// // import { jss, createGenerateClass } from 'Styles';
// //
// // ReactDOM.render(
// //   <JssProvider
// //     jss={jss}
// //     generateClassName={createGenerateClass}>
// //     <App/>
// //   </JssProvider>,
// //   document.getElementById('root'));
//
// //
// // import {renderToString} from 'react-dom/server'
// // import {JssProvider, SheetsRegistry} from 'react-jss'
// // import App from './MyApp'
// //
// // export default function render(req, res) {
// //   const sheets = new SheetsRegistry()
// //
// //   const body = renderToString(
// //     <JssProvider registry={sheets}>
// //       <App />
// //     </JssProvider>
// //   )
// //
// //   // Any instances of `injectSheet` within `<MyApp />` will have gotten sheets
// //   // from `context` and added their Style Sheets to it by now.
// //
// //   return res.send(
// //     renderToString(
// //       <html>
// //         <head>
// //           <style type="text/css">{sheets.toString()}</style>
// //         </head>
// //         <body>{body}</body>
// //       </html>
// //     )
// //   )
// // }
//
//
// import React from 'react';
// // import { render } from 'react-dom';
// // import { createBrowserHistory } from 'history';
// // import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
// import ReactDOM from 'react-dom';
// // import { Provider } from 'react-redux';
// //import { createStore, applyMiddleware } from 'redux';
// import App from './App';
//
// ReactDOM.hydrate(<App />, document.getElementById('root'));
//
// // //import reducers from './reducers';
// //
// // const history = createBrowserHistory();
// // // const store = createStore(reducers, applyMiddleware(routerMiddleware(history)));
// // // <ConnectedRouter history={history}>
// // // </ConnectedRouter>
// //
// // render(
// //   <App />
// // , document.getElementById('app'));
// //
// // if(process.env.NODE_ENV === 'development' && module.hot) {
// //   module.hot.accept();
// //   module.hot.accept('./reducers', () => {
// //     store.replaceReducer(require('./reducers').default);
// //   });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.hydrate(<App/>, document.getElementById('root'));

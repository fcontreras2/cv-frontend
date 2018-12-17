import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/home';

class App extends Component {
  render() {
    return(
       <Home/>
    )
  }
}

export default App;

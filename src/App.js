import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div id="app-title">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Router>,
      </div>
    );
  }
}

export default App;

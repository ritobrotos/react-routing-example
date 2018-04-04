import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router';

import Home from "./Home";
import About from "./About";
import Feedback from "./Feedback"

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-item nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" to="/about">About</Link>
                <Link class="nav-item nav-link" to="/feedback">Feedback</Link>
              </div>
            </div>
          </nav>

          <hr class="my-4" />

          <div id="mainContentContainer">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/feedback" component={Feedback} />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

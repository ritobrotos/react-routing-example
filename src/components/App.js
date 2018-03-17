import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Feedback from "./Feedback"

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <div id="navigationMenu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/feedback">Feedback</Link> </li>
            </ul>
          </div>

          <hr />

          <div id="mainContentContainer">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/feedback" component={Feedback} />
          </div>

        </div>
      </Router>
    );
  }
}

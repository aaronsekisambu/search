import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import DummyData from "./DummyData";
import { NotFound } from "./NotFound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dummy" component={DummyData} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;

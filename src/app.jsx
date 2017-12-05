import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import  Tasks from './containers/tasks.jsx';

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Tasks} />
      </Switch>
    </div>
  </div>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home";
import Repository from "./components/Repository";
import About from "./components/About";
import know_us from "./components/know_us";


const App = () => {
  return (
    <Router>
      <Navbar /> 

      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/about" component={About} exact>
          <About />
        </Route>

        <Route path="/repository" component={Repository} exact>
          <Repository />
        </Route>

        <Route path="/know_us" component={know_us} exact>
          <know_us />
        </Route>
      </Switch>

    </Router>
    
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Repository from "./pages/Repository";
import About from "./components/About";
import know_us from "./pages/know_us";
import Sign_In from "./pages/sign_in";
import Sign_Up from "./pages/sign_up";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar /> 

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/repository" component={Repository} exact/>
        <Route path="/know_us" component={know_us} exact/>
        <Route path="/sign_in" component={Sign_In} exact/>
        <Route path="/sign_up" component={Sign_Up} exact/>
      </Switch>
    
    <Footer />
    </Router>
    
  );
};

export default App;

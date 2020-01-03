import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoffeFacts from "./components/Facts/coffeeFacts";
import Menu from "./components/menu";
import Giphy from "./components/giphy";
import CupOf from "./components/Counter/cupOf";

const App = () => (
  <div className="div-wrap">
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Giphy} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/coffee" component={CoffeFacts} />
        <Route exact path="/cupOf" component={CupOf} />
       {/*  <Route exact path="/types" component={TypesOfCoffee} /> */}
      </Switch>
    </Router>
  </div>
);

export default App;

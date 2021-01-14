import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Ships } from "./components/Ships";
import Container from "./components/Container";
function App() {
  return (
    <BrowserRouter>
      <div className="hero is-fullheight is-dark">
        <Switch>
          <Route exact path="/">
            <Ships />
          </Route>
          <Route path="/addContainer/:ship">
            <Container />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

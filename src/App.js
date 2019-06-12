import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Prediction from "./components/Prediction";

function App() {
  return (
    <Router>
      <h1 style={{ marginLeft: "40%", marginTop: 10 }}>OPTI ANALYTICA </h1>
      <div style={{ marginLeft: "43%" }}>
        <Link className="btn btn-success" to="/">
          Features
        </Link>
        <Link className="btn btn-success" to="/predict">
          Predict
        </Link>{" "}
      </div>

      <Route path="/predict" component={Prediction} />
      <Route exact path="/" exact component={Dashboard} />
    </Router>
  );
}

export default App;

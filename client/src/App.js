//import React, { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./auth/loginPage";
import SignupPage from "./auth/signupPage";
//import axios from "axios";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BrowsePage from "./pages/BrowsePage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/browse">
          <BrowsePage />
        </Route>
        <Route path="/faq">
          <FaqPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

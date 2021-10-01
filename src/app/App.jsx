import React from "react";
import Home from "./home/Home";
import NotFound from "./page404/NotFound";
import { Switch, Route, Redirect } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

export default function App() {
  return (
    <>
      {/* progress-bar */}
      {/* <div className="progress-bar">
        <LinearProgress color="error" variant="determinate" value={80} />
      </div> */}
      {/* progress-bar */}
      <Switch>
        {/* basic route */}
        <Route exact path="/auth">
          <p>auth page</p>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect to="/home" />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

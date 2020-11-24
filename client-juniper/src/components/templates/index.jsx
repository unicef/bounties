import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TopBar from "../organisms/TopBar";
import Sidebar from "../organisms/Sidebar";

export default function Layout(props) {
  return (
    <Fragment>
      <TopBar />

      <Sidebar pageIndex={props.pageIndex} setPageIndex={props.setPageIndex} />

      <Switch>
        <Route exact path="/explorer">
          <div>explorer</div>
        </Route>

        <Redirect from="*" to="/explorer" />
      </Switch>
    </Fragment>
  );
}

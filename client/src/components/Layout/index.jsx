import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import Main from "./Main";
import Explorer from "../Explorer";

export default function Layout(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  console.log("layout");
  return (
    <Fragment>
      <TopBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <Sidebar
        pageIndex={props.pageIndex}
        setPageIndex={props.setPageIndex}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Switch>
        <Route exact path="/explorer">
          <Main>
            <Explorer />
          </Main>
        </Route>
        <Route exact path="/dashboard">
          <div>dashboard</div>
        </Route>
        <Route exact path="/leaderboard">
          <div>leaderboard</div>
        </Route>
        <Route exact path="/profile">
          <div>profile</div>
        </Route>

        <Redirect from="*" to="/explorer" />
      </Switch>
    </Fragment>
  );
}

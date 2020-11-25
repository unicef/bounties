import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TopBar from "../organisms/TopBar";
import Sidebar from "../organisms/Sidebar";

export default function Layout(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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
          <div>explorer</div>
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

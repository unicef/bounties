import React, { Fragment, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import EthereumContext from "../../context/EthereumContext";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";
import Main from "./Main";
import MainBackground from "./MainBackground";
import Explorer from "../Explorer";
import Profile from "../Profile";
import Login from "../Login";
import CreateBounty from "../CreateBounty";
import Privacy from "../Privacy";
import TermsOfService from "../TOS";

export default function Layout(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { networkId, loggedIn, initWeb3 } = useContext(EthereumContext);
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
          <MainBackground>
            <div>leaderboard</div>
          </MainBackground>
        </Route>
        <Route exact path="/profile">
          <Main>{loggedIn ? <Profile /> : <Login />}</Main>
        </Route>

        <Route exact path="/createBounty">
          <MainBackground>
            {/*loggedIn*/ true ? <CreateBounty /> : <Login />}
          </MainBackground>
        </Route>
        <Route exact path="/privacy">
          <MainBackground>
            <Privacy />
          </MainBackground>
        </Route>
        <Route exact path="/tos">
          <MainBackground>
            <TermsOfService />
          </MainBackground>
        </Route>

        <Redirect from="*" to="/explorer" />
      </Switch>
    </Fragment>
  );
}

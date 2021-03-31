import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import BountiesContract from "./contracts/StandardBounties.json";
import ERC20Token from "./contracts/ERC20Token.json";
import "./app.css";
import Layout from "./components/Layout";
import getWeb3 from "./getWeb3";
import EthereumContext from "./context/EthereumContext";
import { SnackbarProvider } from "notistack";
import getLoginToken from "./actions/getLoginToken";
import verifyLoginToken from "./actions/verifyLoginToken";
import getBounties from "./actions/getBounties";

const ethUtil = require("ethereumjs-util");
const sigUtil = require("eth-sig-util");
const Eth = require("ethjs");
const sidebarPaths = ["/explorer", "/dashboard", "leaderboard", "/profile"];

const defaultState = {
  logoUrl: "/image/1601918615229-UNICEF.png",
  primaryColor: "#ffffff",
  lightPrimaryColor: "#daf5ff",
  darkPrimaryColor: "#374ea2",
  containedButtonHover: "#33bef2",
  containedButtonActive: "#0094cb",
  textButtonHover: "#ecfaff",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#f2f4f8",
    height: "100%",
    width: "100%",
  },
}));

export default function BountiesAdmin() {
  const classes = useStyles();
  const [appSettings, setAppSettings] = useState(defaultState);
  const [pageIndex, setPageIndex] = useState(null);
  const [networkId, setNetworkId] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [boostContract, setBoostContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [bounties, setBounties] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    sort: "recent",
    platform: { unicef: true },
    stage: { active: true },
    difficulty: { beginner: true },
  });
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: appSettings.primaryColor,
        light: appSettings.lightPrimaryColor,
        dark: appSettings.darkPrimaryColor,
        containedHover: appSettings.containedButtonHover,
        containedActive: appSettings.containedButtonActive,
        textHover: appSettings.textButtonHover,
      },
      secondary: {
        main: "#4d94ff",
      },
      background: {
        default: "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Inter",  sans-serif',
      fontSize: 12,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      color: "#002452",
    },
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application!
    },
  });

  const initWeb3 = async () => {
    try {
      // Get network provider and web3 instance.

      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = BountiesContract.networks[networkId];
      console.log(networkId);
      console.log(deployedNetwork);
      console.log(BountiesContract);
      console.log(BountiesContract.networks);
      const instance = new web3.eth.Contract(
        BountiesContract.abi,
        "0xCf72314350260DEc994587413fFAD56D7BF719d4"
      );
      const BoostInstance = new web3.eth.Contract(
        ERC20Token.abi,
        4 && "0x4f1690e9b1576a997e40334674d3f14e966bb7bb"
      );

      /*
      await BoostInstance.methods
        .approve(
          "0xCf72314350260DEc994587413fFAD56D7BF719d4",
          web3.utils.toWei((10e18).toString())
        )
        .send({ from: accounts[0] });
*/
      // Login
      const token = await getLoginToken();
      const eth = new Eth(web3.currentProvider);
      const message = ethUtil.bufferToHex(
        new Buffer(`Your login nonce is: ${token}`, "utf8")
      );
      const sig = await eth.personal_sign(message, accounts[0]);

      try {
        const res = await verifyLoginToken(sig, token);
        console.log(res);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      setLoggedIn(true);
      setNetworkId(networkId);
      setWeb3(web3);
      setContract(instance);
      setAccounts(accounts);
      setBoostContract(BoostInstance);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  const initAppData = async () => {
    setBounties(await getBounties());
  };

  useEffect(() => {
    sidebarPaths.forEach((path, index) => {
      const pathname = window.location.pathname;
      if (pathname.indexOf(path) >= 0) {
        setPageIndex(index);
      }
    });

    initAppData();
  }, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <EthereumContext.Provider
          value={{
            loggedIn,
            bounties,
            initWeb3,
            networkId,
            web3,
            contract,
            boostContract,
            accounts,
            filters,
            setFilters,
            initAppData,
          }}
        >
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <CssBaseline>
              <Router>
                <Layout
                  pageIndex={pageIndex}
                  setPageIndex={setPageIndex}
                ></Layout>
              </Router>
            </CssBaseline>
          </SnackbarProvider>
        </EthereumContext.Provider>
      </ThemeProvider>
    </div>
  );
}

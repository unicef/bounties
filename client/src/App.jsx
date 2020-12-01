import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import BountiesContract from "./contracts/StandardBounties.json";
import "./app.css";
import Layout from "./components/Layout";
import getWeb3 from "./getWeb3";
import EthereumContext from "./context/EthereumContext";
import { SnackbarProvider } from "notistack";

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
  const [accounts, setAccounts] = useState([]);

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
      const instance = new web3.eth.Contract(
        BountiesContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      console.log("instance.methods");
      console.log(instance.methods);

      setNetworkId(networkId);
      setWeb3(web3);
      setContract(instance);
      setAccounts(accounts);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  useEffect(() => {
    sidebarPaths.forEach((path, index) => {
      const pathname = window.location.pathname;
      if (pathname.indexOf(path) >= 0) {
        setPageIndex(index);
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <EthereumContext.Provider
          value={{
            initWeb3,
            networkId,
            web3,
            contract,
            accounts,
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

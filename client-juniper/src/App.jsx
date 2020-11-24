import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./app.css";

import Layout from "./components/templates";

import LoadingScreen from "./components/organisms/Dialog/LoadingScreen";
import {
  getAppSettings,
  getAccounts,
  getExchangeRate,
  getPriceHistory,
  getTransactions,
  getTrackedWallets,
  getUpdatingWallet,
  getWallets,
  getWalletsSummary,
  updateUser,
} from "./actions";
import PriceContext from "./context/PriceContext";

const drawerWidth = 240;
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
    backgroundColor: "#f8f8f8",
    height: "100%",
    width: "100%",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function BountiesAdmin() {
  const classes = useStyles();
  const [appSettings, setAppSettings] = useState(defaultState);
  const [hasSettings, setHasSettings] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [wallets, setWallets] = useState([]);
  const [trackedWallets, setTrackedWallets] = useState([]);
  const [prices, setPrices] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [ethRate, setEthRate] = useState(0);
  const [btcRate, setBtcRate] = useState(0);
  const [updatingWallets, setUpdatingWallets] = useState(false);

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

  const updateUserProfile = async (property) => {
    const updatedUser = { ...user, ...property };
    updateUser(updatedUser);
    setUser(updatedUser);
  };

  const fetchAccounts = async () => {
    setAccounts(await getAccounts());
  };

  const fetchWallets = async () => {
    setWallets(await getWallets());
    setSummary(await getWalletsSummary());
    setTrackedWallets(await getTrackedWallets());
    setTransactions(await getTransactions());
  };

  const fetchTrackedWallets = async () => {
    setTrackedWallets(await getTrackedWallets());
  };

  const fetchTransactions = async () => {
    setTransactions(await getTransactions());
  };

  async function initApp() {
    setWallets(await getWallets());
    setTrackedWallets(await getTrackedWallets());
    setTransactions(await getTransactions());
    setSummary(await getWalletsSummary());
    setAccounts(await getAccounts());
    const prices = await getPriceHistory();
    setEthRate(prices.ethereum[prices.ethereum.length - 1].average);
    setBtcRate(prices.bitcoin[prices.bitcoin.length - 1].average);

    setPrices(prices);
  }

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <PriceContext.Provider value={{ prices, btcRate, ethRate }}>
              <Layout
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
              ></Layout>
            </PriceContext.Provider>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

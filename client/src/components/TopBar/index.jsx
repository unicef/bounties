import React, { Fragment, useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import icon from "./unicef-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import EthereumContext from "../../context/EthereumContext";
import MenuPopper from "../MenuPopper";
import OptionsList from "./OptionsList";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {
  injected,
  network,
  walletconnect,
  walletlink,
  ledger,
  trezor,
  lattice,
  frame,
  authereum,
  fortmatic,
  magic,
  portis,
  torus
} from '../../connector';
import {Spinner} from "../Spinner";
import {useWeb3React} from "@web3-react/core";

const ConnectorNames = {
  Injected: 'Injected',
  Network: 'Network',
  WalletConnect: 'WalletConnect',
  WalletLink: 'WalletLink',
  Ledger: 'Ledger',
  Trezor: 'Trezor',
  Lattice: 'Lattice',
  Frame: 'Frame',
  Authereum: 'Authereum',
  Fortmatic: 'Fortmatic',
  Magic: 'Magic',
  Portis: 'Portis',
  Torus: 'Torus'
}

const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink,
  [ConnectorNames.Ledger]: ledger,
  [ConnectorNames.Trezor]: trezor,
  [ConnectorNames.Lattice]: lattice,
  [ConnectorNames.Frame]: frame,
  [ConnectorNames.Authereum]: authereum,
  [ConnectorNames.Fortmatic]: fortmatic,
  [ConnectorNames.Magic]: magic,
  [ConnectorNames.Portis]: portis,
  [ConnectorNames.Torus]: torus
}

const networkNames = {
  null: "Disconnected",
  1: "Main Ethereum Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "0 2px 4px rgba(0,0,0,.075)",
  },
  avatar: {
    cursor: "pointer",
    border: "solid 3px #ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,.15)",
  },
  toolbar: {
    height: "4rem",
    minHeight: 50,
    paddingLeft: 0,
    paddingRight: "1rem",
  },
  icon: {
    width: 64,
    height: "100%",
    backgroundColor: "#2f2b36",
    textAlign: "center",
  },
  iconImage: {
    width: 48,
    paddingTop: 12,
  },
  title: {
    width: 64,
    flexGrow: 1,
  },
  hidden: {
    height: "100%",
  },
  network: {
    marginLeft: 24,
    borderColor: "#e6e7ea",
    color: "#111318",
  },
  signInButton: {
    backgroundColor: "#4d94ff",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#3d84ff",
      color: "#ffffff",
    },
  },
  createBountyButton: {
    backgroundColor: "#4d94ff",
    color: "#ffffff",
    marginRight: 22,
    "&:hover": {
      backgroundColor: "#3d84ff",
      color: "#ffffff",
    },
  },
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { open, onClose } = props;
  const { initWeb3 } = useContext(EthereumContext);
  const { library, chainId, account, connector, activate, error } = useWeb3React();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  const handleClose = async () =>{
    onClose();
    await initWeb3(library, chainId, account);
  }

  return (
      <Dialog maxWidth={true} onClose={handleClose} aria-labelledby="choose-wallet" open={open}>
        <DialogTitle id="simple-dialog-title">Choose Wallet</DialogTitle>
        <DialogContent
            style={{
              display: 'grid',
              gridGap: '1rem',
              gridTemplateColumns: '1fr 1fr 1fr',
              maxWidth: '60rem',
              margin: 'auto'
            }}
        >
          {Object.keys(connectorsByName).map(name => {
            const currentConnector = connectorsByName[name]
            const activating = currentConnector === activatingConnector
            const connected = currentConnector === connector
            const disabled = !!activatingConnector || connected || !!error

            return (
                <button
                    style={{
                      height: '3rem',
                      borderRadius: '1rem',
                      borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
                      cursor: disabled ? 'unset' : 'pointer',
                      position: 'relative'
                    }}
                    disabled={disabled}
                    key={name}
                    onClick={() => {
                      setActivatingConnector(currentConnector)
                      activate(connectorsByName[name])
                    }}
                >
                  <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'black',
                        margin: '0 0 0 1rem'
                      }}
                  >
                    {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
                    {connected && (
                        <span role="img" aria-label="check">
                    ✅
                  </span>
                    )}
                  </div>
                  {name}
                </button>
            )
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default function TopBar(props) {
  const classes = useStyles();
  const { networkId, loggedIn } = useContext(EthereumContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden smDown implementation="css" className={classes.hidden}>
            <div className={classes.icon}>
              <img src={icon} className={classes.iconImage} />
            </div>
          </Hidden>
          <Hidden smDown implementation="css">
            <Chip
                className={classes.network}
                variant="outlined"
                size="small"
                icon={
                  <FiberManualRecordIcon
                      style={{ color: loggedIn ? "#88ff88" : "ff8888" }}
                  />
                }
                label={networkNames[networkId] || "Unknown Network"}
            />
          </Hidden>
          <div className={classes.title}>
            <Hidden mdUp implementation="css">
              <IconButton
                  onClick={() => {
                    if (props.setMobileOpen) {
                      props.setMobileOpen(!props.mobileOpen);
                    }
                  }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
          {!loggedIn ? (
              <div>
                <Button className={classes.signInButton} onClick={handleClickOpen}>
                  Sign In
                </Button>
                <SimpleDialog open={open} onClose={handleClose} />
              </div>
          ) : (
              <Fragment>
                <Link to="/createBounty" style={{ textDecoration: "none" }}>
                  <Button className={classes.createBountyButton}>
                    Create Bounty
                  </Button>
                </Link>

                <FontAwesomeIcon
                    icon={faBell}
                    color="inherit"
                    className={
                      props.pageIndex === 0
                          ? classes.navIconSelected
                          : classes.navIcon
                    }
                    style={{
                      transform: "rotate(25deg)",
                      marginRight: 24,
                      fontSize: 20,
                      color: "#868e9c",
                    }}
                />

                <MenuPopper
                    placement={"bottom"}
                    button={
                      <Avatar alt="User Name" src={null} className={classes.avatar} />
                    }
                >
                  <OptionsList />
                </MenuPopper>
              </Fragment>
          )}
        </Toolbar>
      </AppBar>
  );
}

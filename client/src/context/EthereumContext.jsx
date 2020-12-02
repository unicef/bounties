import { createContext } from "react";

const EthereumContext = createContext({
  loggedIn: false,
  bounties: [],
  networkId: null,
  web3: null,
  contract: null,
  accounts: [],
  filters: {},
  setFilters: null,
  initAppData: null,
});

export default EthereumContext;

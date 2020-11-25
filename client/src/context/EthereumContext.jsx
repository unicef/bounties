import { createContext } from "react";

const EthereumContext = createContext({
  networkId: null,
  web3: null,
  contract: null,
  accounts: [],
});

export default EthereumContext;

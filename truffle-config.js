require("dotenv").config();
const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env["RINKEBY_MNEMONIC"];
var rinkebyKey = process.env["RINKEBY_KEY"];
var tokenKey = process.env["INFURA_KEY"];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
    },
    rinkeby: {
      host: "localhost",
      provider: function () {
        return new HDWalletProvider(
          rinkebyKey,
          "https://rinkeby.infura.io/v3/" + tokenKey
        );
      },
      network_id: 4,
      gas: 6700000,
      gasPrice: 30000000000,
    },
  },
};

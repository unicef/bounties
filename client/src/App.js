import React, { Component } from "react";
import BountiesContract from "./contracts/StandardBounties.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { numBounties: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
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
      const user = accounts[0];
      console.log(accounts[0]);
      console.log(await instance.methods.numBounties().call());
      console.log(await instance.methods.bounties(0).call());
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({
        web3,
        accounts,
        contract: instance,
      });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;
    const user = accounts[0];

    const bountyId = await contract.methods
      .issueAndContribute(
        user,
        [user],
        [user],
        "",
        2528821098,
        "0x0000000000000000000000000000000000000000",
        0,
        10
      )
      .send({ from: user, value: 10 });

    console.log(bountyId);
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
        <button onClick={this.runExample}>click</button>
      </div>
    );
  }
}

export default App;

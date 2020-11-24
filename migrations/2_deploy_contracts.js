var StandardBounties = artifacts.require("./StandardBounties.sol");

module.exports = function (deployer) {
  deployer.deploy(StandardBounties);
};

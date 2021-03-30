const StandardBounties = artifacts.require("./StandardBounties.sol");
const CONSTANTS = require("../config/constants");

contract("StandardBounties", (accounts) => {
  const [creator, user, account1, account2, account3] = accounts;
  let bounties = null;
  const emptyString = "";
  const zeroHash =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  const zeroAddress = "0x0000000000000000000000000000000000000000";

  const testDeadline = new Date().getTime() + CONSTANTS.oneWeek;
  const bounty = {
    sender: creator,
    issuers: [creator],
    approvers: [creator],
    data: "test data",
    deadline: testDeadline,
    token: zeroAddress,
    tokenVersion: 0,
    depositAmount: 1,
  };
  const fulfillment = {
    sender: creator,
    bountyId: 0,
    fulfillers: [creator],
    data: "test data",
  };

  beforeEach(async () => {
    bounties = await StandardBounties.new();
  });

  it("creates a bounty", async () => {
    const bountyId = await bounties.issueAndContribute.call(
      bounty.sender,
      bounty.issuers,
      bounty.approvers,
      bounty.data,
      bounty.deadline,
      bounty.token,
      bounty.tokenVersion,
      bounty.depositAmount,
      { from: creator, value: bounty.depositAmount }
    );

    expect(bountyId.toNumber()).to.be.equal(0);
  });
  it("fulfills a bounty", async () => {
    const bountyId = await bounties.issueAndContribute.call(
      bounty.sender,
      bounty.issuers,
      bounty.approvers,
      bounty.data,
      bounty.deadline,
      bounty.token,
      bounty.tokenVersion,
      bounty.depositAmount,
      { from: creator, value: bounty.depositAmount }
    );
    const bountyReceipt = await bounties.issueAndContribute(
      bounty.sender,
      bounty.issuers,
      bounty.approvers,
      bounty.data,
      bounty.deadline,
      bounty.token,
      bounty.tokenVersion,
      bounty.depositAmount,
      { from: creator, value: bounty.depositAmount }
    );

    const fulfillmentId = await bounties.fulfillBounty.call(
      fulfillment.sender,
      bountyId,
      fulfillment.fulfillers,
      fulfillment.data
    );
    expect(fulfillmentId.toNumber()).to.be.equal(0);
  });
});

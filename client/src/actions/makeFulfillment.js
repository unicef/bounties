export default async (account, contract, bountyId, data) => {
  const boostAddress = "0x4f1690e9b1576a997e40334674d3f14e966bb7bb";
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  return await contract.methods
    .fulfillBounty(account, bountyId, [account], data)
    .send({ from: account });
};

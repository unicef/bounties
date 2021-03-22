export default async (contract, valueInWei, payMethod, sender, bountyId) => {
  const boostAddress = "0x4f1690e9b1576a997e40334674d3f14e966bb7bb";
  const zeroAddress = "0x0000000000000000000000000000000000000000";

  if (payMethod === "eth") {
    return await contract.methods
      .contribute(sender, bountyId, valueInWei)
      .send({ from: sender, value: valueInWei });
  } else {
    return await contract.methods
      .contribute(sender, bountyId, valueInWei)
      .send({ from: sender });
  }
};

export default async (
  account,
  contract,
  data,
  deadline,
  valueInWei,
  payMethod
) => {
  const boostAddress = "0x4f1690e9b1576a997e40334674d3f14e966bb7bb";
  const zeroAddress = "0x0000000000000000000000000000000000000000";

  if (payMethod === "eth") {
    return await contract.methods
      .issueAndContribute(
        account,
        [account],
        [account],
        data,
        deadline,
        zeroAddress,
        0,
        valueInWei
      )
      .send({ from: account, value: valueInWei });
  } else {
    return await contract.methods
      .issueAndContribute(
        account,
        [account],
        [account],
        data,
        deadline,
        boostAddress,
        20,
        valueInWei
      )
      .send({ from: account });
  }
};

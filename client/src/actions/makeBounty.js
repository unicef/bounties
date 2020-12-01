export default async (account, contract, data, deadline, valueInWei) => {
  return await contract.methods
    .issueAndContribute(
      account,
      [account],
      [account],
      data,
      deadline,
      "0x0000000000000000000000000000000000000000",
      0,
      valueInWei
    )
    .send({ from: account, value: valueInWei });
};

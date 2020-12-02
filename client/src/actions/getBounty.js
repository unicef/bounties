export default async (bountyId) => {
  let res, bounty;
  try {
    res = await fetch(`/bounties/${bountyId}`);
    bounty = await res.json();
  } catch (e) {
    console.log(e);
    return null;
  }

  return bounty;
};

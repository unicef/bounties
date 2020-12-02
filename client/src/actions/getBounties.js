export default async (bounty) => {
  let res, bounties;
  try {
    res = await fetch(`/bounties`);
    bounties = await res.json();
  } catch (e) {
    console.log(e);
    return null;
  }

  return bounties;
};

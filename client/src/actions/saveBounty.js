export default async (bounty) => {
  let res;
  try {
    res = await fetch(`/bounties`, {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        bounty,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log(e);
    return null;
  }

  return bounty;
};

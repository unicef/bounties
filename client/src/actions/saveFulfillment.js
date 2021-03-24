export default async (fulfillment) => {
  let res, json;
  try {
    res = await fetch(`/bounties/fulfill`, {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        fulfillment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    json = res.json();
  } catch (e) {
    console.log(e);
    return null;
  }

  return json;
};

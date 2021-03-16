export default async (account) => {
  try {
    await fetch(`/account`, {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        account,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log(e);
    return false;
  }

  return true;
};

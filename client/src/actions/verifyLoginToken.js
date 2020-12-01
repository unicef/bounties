export default async (sig, token) => {
  let res;
  try {
    res = await fetch(`/login/token`, {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        sig,
        token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log(e);
    return null;
  }

  return token;
};

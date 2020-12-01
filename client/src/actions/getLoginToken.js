export default async () => {
  let res, token;
  try {
    res = await fetch("/login/token");
    token = await res.json();
  } catch (e) {
    console.log(e);
    return null;
  }

  return token;
};

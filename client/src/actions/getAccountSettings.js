export default async () => {
  let res, account;
  try {
    res = await fetch(`/account`);
    account = await res.json();
  } catch (e) {
    console.log(e);
    return null;
  }

  return account;
};

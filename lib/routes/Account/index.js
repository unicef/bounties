const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Account Routes");

router.get("/", async (req, res) => {
  const bountiesAdmin = req.app.get("bountiesAdmin");
  const { address } = req.session.passport.user;
  const account = await bountiesAdmin.getAccountByAddress(address);
  res.send(account);
});

router.post("/", async (req, res) => {
  const { account } = req.body;
  const bountiesAdmin = req.app.get("bountiesAdmin");

  try {
    const { address } = req.session.passport.user;

    account.address = address;
    await bountiesAdmin.saveAccount(account);
    console.log(account);
  } catch (e) {
    return res.status(400).send();
  }

  res.send(account);
});

module.exports = router;

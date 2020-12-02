const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Bounties Routes");

router.get("/", async (req, res) => {
  const bountiesAdmin = req.app.get("bountiesAdmin");

  res.send(await bountiesAdmin.getBounties());
});

router.get("/:bountyId", async (req, res) => {
  const bountiesAdmin = req.app.get("bountiesAdmin");
  const { bountyId } = req.params;
  const bounty = await bountiesAdmin.getBountyById(bountyId);
  res.send(bounty);
});

router.post("/", async (req, res) => {
  const { bounty } = req.body;
  const bountiesAdmin = req.app.get("bountiesAdmin");

  try {
    const { address } = req.session.passport.user;

    bounty.owner = address;
    await bountiesAdmin.saveBounty(bounty);
  } catch (e) {
    return res.status(400).send();
  }

  res.send(bounty);
});

module.exports = router;

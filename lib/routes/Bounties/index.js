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
  console.log(bounty);
  try {
    const { address } = req.session.passport.user;

    bounty.owner = address;
    await bountiesAdmin.saveBounty(bounty);
  } catch (e) {
    return res.status(400).send();
  }

  res.send(bounty);
});

router.put("/", async (req, res) => {
  const { bounty } = req.body;
  const bountiesAdmin = req.app.get("bountiesAdmin");
  console.log(bounty);
  try {
    await bountiesAdmin.updateBounty(bounty);
  } catch (e) {
    return res.status(400).send();
  }

  res.send(bounty);
});

router.post("/fulfillment", async (req, res) => {
  const { fulfillment } = req.body;
  const bountiesAdmin = req.app.get("bountiesAdmin");

  try {
    await bountiesAdmin.saveFulfillment(fulfillment);
  } catch (e) {
    return res.status(400).send();
  }

  res.send(fulfillment);
});

module.exports = router;

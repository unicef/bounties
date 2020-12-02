const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Login Routes");

router.post("/login", async (req, res) => {
  try {
    if (req.session.passport.user.profile) {
      logger.info(`Login ${req.session.passport.user.profile.email}`);
      return res.json(req.session.passport.user.profile);
    }
  } catch (e) {
    return res.status(500).send();
  }
  return res.status(401).send();
});

router.get("/token", async (req, res) => {
  const token = Math.round(Math.random() * 1e16);
  const loginTokenCache = req.app.get("loginTokenCache");

  loginTokenCache.set(token, true);
  res.json(token);
});

module.exports = router;

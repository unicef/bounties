const router = require("express").Router();

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.get("/logout", async (req, res) => {
  req.session.destroy(() => {
    res.send();
  });
});

module.exports = router;

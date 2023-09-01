const router = require("express").Router();
const { User, validate } = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
  } catch (error) {}
});

module.exports = router;

const router = require("express").Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get("/", (req, res) => {
  res.send("blob");
});

module.exports = router;

const express = require("express");
const User = require("./model/User")
const router = express.Router();

// Get all posts
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post("/users", async (req, res) => {
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	});
	await user.save();
	res.send(post);
})

module.exports = router;

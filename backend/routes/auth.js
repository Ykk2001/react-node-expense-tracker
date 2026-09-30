const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//register route
router.post("/register", async (req, res) => {
  try {
    let { password, email} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
  } catch (error) {
    console.log("error in register Api", error);

    if (error.code === 11000) {
        return res.status(400).json({
            message: "Email already exists. Please use another email."
        });
    }

    return res.status(500).json({
        message: "Something went wrong. Please try again."
    });
}
});

//login route
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Wrong credentials!");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!validPassword) return res.status(400).json("Wrong credentials!");

    res.status(200).json({ userId: user._id,email:user.email });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports=router;


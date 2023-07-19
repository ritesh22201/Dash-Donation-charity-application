const express = require("express");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminModel = require("../../models/adminModels/adminModel");
const adminBlackListModel = require("../../models/adminModels/userBlackList");

adminRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const newPass = await bcrypt.hash(password, 10);
    const adminuser = await AdminModel.create({
      ...req.body,
      password: newPass,
    });
    res.status(200).send({ msg: "Admin registered successfully", adminuser });
  } catch (error) {
    res.status(400).send({ errmsg: error.message });
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminuser = await AdminModel.findOne({ email });
    if (!adminuser) {
      return res.status(400).send({ msg: "Invalid Credentials" });
    }
    const comparePass = await bcrypt.compare(password, adminuser.password);
    if (!comparePass) {
      return res.status(400).send({ msg: "Invalid Credentials" });
    } else {
      const token = jwt.sign(
        { userId: adminuser._id, name: adminuser.name },
        process.env.secretKey,
        { expiresIn: "1d" }
      );
      res.status(200).send({ msg: "Admin LoggedIn Successfully", token });
    }
  } catch (error) {
    res.status(400).send({ errmsg: error.message });
  }
});

adminRouter.get("/logout", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(400).send("Login First!");
  }
  const { email, password } = req.body;
  try {
    const blackListAdmin = await adminBlackListModel.create({ token });
    res.status(200).send("Admin Logged Out");
  } catch (error) {
    res.status(400).send({ errmsg: error.message });
  }
});



module.exports = adminRouter;

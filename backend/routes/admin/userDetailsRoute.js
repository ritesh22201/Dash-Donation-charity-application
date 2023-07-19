const express = require("express");
const UserModel = require("../../models/userModel");
const UserBlackList = require("../../models/adminModels/userBlackList");
const userDetailsRoute = express.Router();

userDetailsRoute.get("/", async (req, res) => {
  const { q } = req.query;
  const page = req.query.page;
  const limit = req.query.limit;
  try {
    const pageNum = +page || 1;
    const pageLimit = +limit || 5;
    const skip = (pageNum - 1) * pageLimit;

    if (q) {
      const allusers = await UserModel.find({
        name: { $regex: q, $options: "i" },
      })
        .skip(skip)
        .limit(pageLimit);
      res.status(200).send(allusers);
    } else {
      const allusers = await UserModel.find().skip(skip).limit(pageLimit);
      res.status(200).send(allusers);
    }
  } catch (error) {
    res.status(400).send({ errmsg: error.message });
  }
});


userDetailsRoute.post("/blockuser", async (req, res) => {
 const {email} = req.body
  try {
   const blockuser = await UserBlackList.create({email})
   res.status(200).send({"msg":"User is Blocked",blockuser})
  } catch (error) {
    res.status(400).send({ errmsg: error.message });
  }
});

userDetailsRoute.delete("/:id", async (req, res) => {
  const id = req.params.id
  try {
   const deleteUser = await UserModel.findByIdAndDelete({_id:id})
   res.status(200).send({"msg":"User Deleted",deleteUser})
  } catch (error) {
    res.status(400).send({ errmsg: error.message });
  }
});






module.exports = userDetailsRoute;

const mongoose = require("mongoose")

const userBlackListSchema = new mongoose.Schema({
   email:{type:String,required:true}
})

const UserBlackList = mongoose.model('userBlackList',userBlackListSchema)

module.exports = UserBlackList;
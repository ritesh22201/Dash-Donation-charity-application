const mongoose = require("mongoose")

const adminBlackListSchema = new mongoose.Schema({
   token:{type:String,required:true}
})

const adminBlackListModel = mongoose.model('adminblacklist',adminBlackListSchema)

module.exports = adminBlackListModel;
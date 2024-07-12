const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true ,unique: true,},
  password: { type: String, required: true },
//   userType:{type:String,enum: ['admin']}
 

});
module.exports = mongoose.model("User", userSchema);
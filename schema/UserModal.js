const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  profile_pic_id: mongoose.Schema.Types.ObjectId,
  isEnabled: Boolean,
  role: String,
  grade: String,
  class: mongoose.Types.ObjectId,
  modules: [String],
});

module.exports = mongoose.model("users", UserSchema);

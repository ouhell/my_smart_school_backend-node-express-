const UserModel = require("./UserModal");
const mongoose = require("mongoose");
const userSchemaObj = UserModel.schema.obj;
const StudentSchema = mongoose.Schema({
  ...userSchemaObj,
  role: "STUDENT",
  grade: String,
  class: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("users", StudentSchema);

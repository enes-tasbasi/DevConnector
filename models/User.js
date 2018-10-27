const mongoose = require("mongoose");
const _ = require("lodash");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

UserSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();

  return _.pick(userObject, ["name", "email", "avatar"]);
};

module.exports = User = mongoose.model("users", UserSchema);

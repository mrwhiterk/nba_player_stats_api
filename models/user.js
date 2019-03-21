const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = UserSchema;

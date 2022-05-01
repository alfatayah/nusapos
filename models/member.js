const mongoose = require('mongoose');
const  { ObjectId } = mongoose.Schema;
const bcrypt = require("bcryptjs");
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  no_hp: {
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
  address: {
    type: String,
    required: true
  },
  username_ig: {
    type: String,
  },
  nik: {
    type: String,
    required: true
  },
  status: {
    type: String,
  },
  // di sini gue tambahin FK transaction id untuk laporan customer nya
  transaction_Id: [{
    type: ObjectId,
    ref: 'transaction'
  }],
})

memberSchema.pre('save', async function (next) {
  const member = this;
  if (member.isModified('password')) {
    member.password = await bcrypt.hash(member.password, 8);
  }
})

module.exports = mongoose.model("member", memberSchema);

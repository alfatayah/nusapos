const mongoose = require('mongoose');
const  { ObjectId } = mongoose.Schema;
const memberSchema = new mongoose.Schema({
  no_member: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  no_hp: {
    type: String,
    required: true
  },
  username_ig: {
    type: String,
    required: true
  },
  identity: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  // di sini gue tambahin FK transaction id untuk laporan customer nya
  transaction_Id: [{
    type: ObjectId,
    ref: 'transaction'
  }],
})

module.exports = mongoose.model("member", memberSchema);

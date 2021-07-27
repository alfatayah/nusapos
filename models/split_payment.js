const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const splitpaymentSchema = new mongoose.Schema({
  first_paid: {
    type: Number,
    required: true,
  },
  fisrt_changes: {
    type: Number,
    required: true,
  },
  second_paid: {
    type: Number,
    required: true,
  },
  second_changes: {
    type: Number,
    required: true,
  },
  transaction_Id: [{
    type: ObjectId,
    ref: 'transaction'
  }],
  
})

module.exports = mongoose.model("split_payment", splitpaymentSchema);

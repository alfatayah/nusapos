const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const splitpaymentSchema = new mongoose.Schema({
  first_paid: {
    type: Number,
    required: true,
  },
  first_changes: {
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
  transdetail_id: {
    type: ObjectId,
    ref: 'transaction_detail'
  },
  
})

module.exports = mongoose.model("split_payment", splitpaymentSchema);

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const cashpaymentSchema = new mongoose.Schema({
  paid: {
    type: Number,
    required: true,
  },
  changes: {
    type: Number,
    required: true,
  },
  transaction_Id: [{
    type: ObjectId,
    ref: 'transaction'
  }],
  
})

module.exports = mongoose.model("cash_payment", cashpaymentSchema);

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const cashpaymentSchema = new mongoose.Schema({
  paid: {
    type: Number,
    required: true,
  },
  changes: {
    type: Number,
  },
  transdetail_id: {
    type: ObjectId,
    ref: 'transaction_detail'
  },
  
})

module.exports = mongoose.model("cash_payment", cashpaymentSchema);

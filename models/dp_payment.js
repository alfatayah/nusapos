const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const dppaymentSchema = new mongoose.Schema({
  paid: {
    type: Number,
    required: true,
  },
  due_date: {
    type: Date,
    required: true,
  },
  transdetail_id: {
    type: ObjectId,
    ref: 'transaction_detail'
  },
  
})

module.exports = mongoose.model("dp_payment", dppaymentSchema);

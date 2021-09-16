const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const transferpaymentSchema = new mongoose.Schema({
  no_transfer: {
    type: String,
    required: true,
  },
  transdetail_id: {
    type: ObjectId,
    ref: 'transaction_detail'
  },
  
})

module.exports = mongoose.model("transfer_payment", transferpaymentSchema);

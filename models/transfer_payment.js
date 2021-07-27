const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const transferpaymentSchema = new mongoose.Schema({
  no_transfer: {
    type: String,
    required: true,
  },
  transaction_Id: [{
    type: ObjectId,
    ref: 'transaction'
  }],
  
})

module.exports = mongoose.model("transfer_payment", transferpaymentSchema);

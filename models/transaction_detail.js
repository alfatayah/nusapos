const mongoose = require('mongoose');
const  { ObjectId } = mongoose.Schema;
const transaction_detailSchema = new mongoose.Schema({
  transaction_Id: [{
    type: ObjectId,
    ref: 'transaction'
  }],
})

module.exports = mongoose.model("transaction_detail", transaction_detailSchema);
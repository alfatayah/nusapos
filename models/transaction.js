const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
  member_Id: {
    type: ObjectId,
    ref: 'member'
  },
  subtotal: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  total_discount: {
    type: Number,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  invoice: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  guarantee: {
    type: String,
    required: true,
  },
  date_transaction: {
    type: Date,
    required: true,
  },
  user_id:{
    type : ObjectId,
    ref: 'user'
  },
  note: {
    type: String,
  },
  transdetail_id: {
    type: ObjectId,
    ref: 'transaction_detail'
  },
  dp_id:{
    type : ObjectId,
    ref: 'dp_payment'
  },
  split_id:{
    type : ObjectId,
    ref: 'split_payment'
  },
  cash_id:{
    type : ObjectId,
    ref: 'cash_payment'
  },
  kasbon_id:{
    type : ObjectId,
    ref: 'kasbon_payment'
  },
  transfer_id:{
    type : ObjectId,
    ref: 'transfer_payment'
  }


})

module.exports = mongoose.model("transaction", transactionSchema);

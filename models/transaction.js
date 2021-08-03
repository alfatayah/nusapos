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
    type: String,
    required: true
  },
  end_date: {
    type: String,
    required: true
  },
  days:{
    type: Number,
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
  jaminan: {
    type: String,
    required: true,
  },
  date_transaction: {
    type: String,
    required: true,
  },
  user_id:{
    type : ObjectId,
    ref: 'user'
  },
  desc_diskon: [{
    type: String,
  }],
  product_Id:[{
    type: ObjectId,
    ref: 'product'
  }],
  discountId:[{
    type: ObjectId,
    ref: 'discount'
  }],
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

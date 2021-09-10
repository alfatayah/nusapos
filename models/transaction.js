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
  desc_trans: {
    type: String,
  },
  product_id:[{
    type: ObjectId,
    ref: "product"
  }],
  discountId:{
    type: ObjectId,
    ref: 'discount'
  },
  payment_method:{
    type: String,
  },
  transdetail_id: {
    type: ObjectId,
    ref: 'transaction_detail'
  },



})

module.exports = mongoose.model("transaction", transactionSchema);

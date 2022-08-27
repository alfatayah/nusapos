const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
  member_id: {
    type: ObjectId,
    ref: 'member'
  },
  dateBook:{
    type: String,
    required: true
  },
  dateIn: {
    type: String,
    required: true
  },
  dateOut: {
    type: String,
    required: true
  },
  totalDays:{
    type: Number,
    required: true
  },
  product_id:[{
    type: ObjectId,
    ref: "product"
  }],
  totalBooking:{
    type: Number,
    required: true
   },
   status:{
    type: String,
   },
  description:{
    type: String,
  }
})

module.exports = mongoose.model("booking", bookingSchema);

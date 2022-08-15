const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
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
   }
})

module.exports = mongoose.model("booking", bookingSchema);

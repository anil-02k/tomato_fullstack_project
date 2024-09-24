import mongoose from "mongoose";

const orderShema = new mongoose.Schema({
  userId: { type: String, require: true },
  items: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Food Processing",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  payment:{
    type:Boolean,default:false
  }
});

const orderModel=mongoose.models.order || mongoose.model("order",orderShema)

export default orderModel;
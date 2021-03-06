const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripsSchema = new Schema({
  country: { type: String, required: true },
  user_id: { type: String, required: true },
  date_leave: { type: Date },
  date_back: { type: Date },
  updated_at: { type: Date, default: Date.now },
  current: {type: Boolean, default: false},
  totalCost: {type: Number, required: true},
  budget: {type:Number, default:0}
});

const Trips = mongoose.model("Trips", tripsSchema);

module.exports = Trips;

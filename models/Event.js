const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
    min: `2022-01-01`,
    max: `2022-12-31`
  },
  startTime: {
    type: Number,
    require: true,
  },
  recurringDates: {
    type: String,
    required: true,
  },
   endDate: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  discordUsername: {
    type: String, //can pull from OATH once we got that going
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", EventSchema);

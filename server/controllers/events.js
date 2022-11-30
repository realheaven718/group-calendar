const Event = require("../models/Event");

module.exports = {
  //test function
  ping: (req, res) => {
    return res.json({ message: "pong" });
  },
  create: async (req, res) => {
    try {
      let data = req.body.data;
      console.log(data);
      await Event.create({
        title: data.title,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        startTime: data.startTime,
        endTime: data.endTime,
        recurringDates: data.recurring.days,
        recurringRate: data.recurring.rate,
        location: data.location,
        discordName: data.discordName,
      });
      res.json({ message: "Event created!" });
    } catch (err) {
      console.log(err);
    }
  },
};

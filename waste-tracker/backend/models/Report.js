const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  location: String,
  description: String,
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now },
  userId: String, // optional if you add authentication later
});

module.exports = mongoose.model('Report', reportSchema);
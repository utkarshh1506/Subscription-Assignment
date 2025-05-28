const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'CANCELLED', 'EXPIRED'], default: 'ACTIVE' },
  startDate: { type: Date, default: Date.now },
  endDate: Date,
});

module.exports = mongoose.model('Subscription', subscriptionSchema);

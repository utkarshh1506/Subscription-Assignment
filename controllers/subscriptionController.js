const Subscription = require('../models/subscriptionModel');
const Plan = require('../models/planModel');

exports.create = async (req, res) => {
  const { planId } = req.body;
  const plan = await Plan.findById(planId);
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + plan.duration * 86400000);

  const subscription = await Subscription.create({
    userId: req.user.id,
    planId,
    startDate,
    endDate,
    status: 'ACTIVE',
  });

  res.status(201).json(subscription);
};

exports.get = async (req, res) => {
  const sub = await Subscription.findOne({ userId: req.user.id }).populate('planId');
  res.json(sub);
};

exports.update = async (req, res) => {
  const { planId } = req.body;
  const plan = await Plan.findById(planId);
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + plan.duration * 86400000);

  const sub = await Subscription.findOneAndUpdate(
    { userId: req.user.id },
    { planId, startDate, endDate, status: 'ACTIVE' },
    { new: true }
  );

  res.json(sub);
};

exports.cancel = async (req, res) => {
  const sub = await Subscription.findOneAndUpdate(
    { userId: req.user.id },
    { status: 'CANCELLED' },
    { new: true }
  );
  res.json(sub);
};

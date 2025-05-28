const Plan = require('../models/planModel');
const redis = require('../config/redis');

exports.getPlans = async (req, res) => {
  const cached = await redis.get('plans');
  if (cached) return res.json(JSON.parse(cached));

  const plans = await Plan.find();
  await redis.set('plans', JSON.stringify(plans), { EX: 3600 });
  res.json(plans);
};

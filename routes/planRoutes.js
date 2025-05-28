const router = require('express').Router();
const { getPlans } = require('../controllers/planController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getPlans);

module.exports = router;

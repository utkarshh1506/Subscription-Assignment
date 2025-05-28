const router = require('express').Router();
const { create, get, update, cancel } = require('../controllers/subscriptionController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, create);
router.get('/', auth, get);
router.put('/', auth, update);
router.delete('/', auth, cancel);

module.exports = router;

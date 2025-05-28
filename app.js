require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(express.json(), morgan('dev'), helmet(), cors());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/plans', require('./routes/planRoutes'));
app.use('/api/subscriptions', require('./routes/subscriptionRoutes'));

module.exports = app;

const connectDB = require('./config/db');
const app = require('./app');
const connectRedis = require('./config/redis');

connectDB();
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);


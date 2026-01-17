

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const UserRouter = require('./Configurations/Routes/User');
const dbConnect = require('./Configurations/DbConnect/database');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});

// routes
app.use('/api/v1/users', UserRouter);

// db + server
dbConnect()


 app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
});

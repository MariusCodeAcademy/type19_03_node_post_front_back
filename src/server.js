const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { port } = require('./config');
const app = express();

// Middleware
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.json({ msg: 'home route' });
});

// app Listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

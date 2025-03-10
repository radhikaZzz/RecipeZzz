const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const userRoutes = require('./routes/user');
const recipeRoutes = require('./routes/recipe');
app.use('/api/recipes', recipeRoutes);

app.use(express.json());
app.use('/api/users', userRoutes);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error' });
});


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const serviceRequestRoutes = require('./routes/serviceRequestRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/auth', authRoutes);
app.use('/api/service-requests', serviceRequestRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log();
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
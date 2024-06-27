const { User } = require('../models'); 

exports.login = async (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: 'Login successful' });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: 'User registered successfully' });
};
const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');

exports.registerCustomer = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    let customer = await Customer.findOne({ email });
    if (customer) {
      return res.status(400).json({ msg: 'Customer already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    customer = new Customer({
      name,
      email,
      password: hashedPassword,
      phone,
      address
    });
    await customer.save();
    res.status(201).json({ msg: 'Customer registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

exports.loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    res.json({ msg: 'Login successful', customer: { id: customer._id, name: customer.name, email: customer.email } });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().select('-password');
    res.json(customers);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

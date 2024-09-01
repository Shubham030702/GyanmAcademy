const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const registered = require('./models/users')

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

app.post('/api/register', async (req, res) => {
    try {
        const { fullName, schoolName, Class, subject, Parents_phone,
            Personal_phone,
            Personal_Address } = req.body;
        const newUser = new registered({
            fullName, schoolName, class: Class, subject, parentPhone: Parents_phone,
            personalPhone: Personal_phone,
            Address: Personal_Address
        });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
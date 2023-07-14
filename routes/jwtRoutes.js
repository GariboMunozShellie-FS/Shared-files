require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.use(express.json());

router.get('/secured', (req, res) => {
    const email = process.env.email;
    const password = process.env.password;

    const token = jwt.sign({ email: email, password: password }, process.env.secret_key);

    res.status(200).json({
      message: `Service is Up and you were able to use the .env file`,
      method: req.method,
      token: token
    });
});

module.exports = router
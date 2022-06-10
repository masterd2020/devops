const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = {
    name: 'MasterD',
    version: '1.0.0',
    description: 'MasterD is a simple and easy to use API for managing your data in a database.',
  }

  res.status(200).json({
    success: true,
    message: 'Hello and welcome',
    data
  })
})

module.exports = app
const app = require('express')();
const express = require('express');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');
app.use(express.json())
app.use(cors({"origin": "*"}));
app.use('/api/msg',messageRoutes);
app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello server is running')
      .end();
  });
module.exports=app;
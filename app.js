const app = require('express')();
const express = require('express');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');
app.use(express.json())
app.use(cors({origin: ['http://127.0.0.1:5500']}))
app.use('/api/msg',messageRoutes);
app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello server is running')
      .end();
  });
module.exports=app;
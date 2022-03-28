const app = require('express')();
const express = require('express');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.use(express.json())

app.use('/api/msg',messageRoutes);
app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello server is running')
      .end();
  });
module.exports=app;
const app = require('express')();
const express = require('express');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');
const corsOpts = {
  origin: 'https://napiyo.github.io',

  methods: [
    'GET',
    'POST',
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
const app = require('express')();
const express = require('express');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');
app.use(express.json())
// app.use(cors({"origin": "*"}));
// enable cors
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.options(
  '*',
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use('/api/msg',messageRoutes);
app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello server is running')
      .end();
  });
module.exports=app;
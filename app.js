const app = require('express')();
const express = require('express');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');
app.use(express.json())
app.use(cors())
app.use('/api/msg',messageRoutes);
module.exports=app;
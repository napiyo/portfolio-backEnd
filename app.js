const app = require('express')();
const express = require('express');
const messageRoutes = require('./routes/messageRoutes');

app.use(express.json())

app.use('/api/msg',messageRoutes);
module.exports=app;
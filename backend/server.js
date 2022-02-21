require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const colors = require('colors');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json());


//Routes
app.use('/projects', require('./routers/projectsRouter'));




app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
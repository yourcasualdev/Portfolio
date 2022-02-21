require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const colors = require('colors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

const app = express();
connectDB();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));


//Routes
app.use('/projects', require('./routers/projectsRouter'));



app.use(errorHandler)
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
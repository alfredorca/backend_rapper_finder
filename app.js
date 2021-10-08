const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const app = express();

//environment variables 
require('dotenv').config();

//database connections
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to DB✔...'))
.catch(() => console.log("Error connecting to DB❌"))

//setup middlewares
app.use(cors());
app.use(express.json())

//routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/rappers', require('./routes/rapper'))
app.use('/api/albums', require('./routes/album'))

//open port to listen 
const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server running!✔...')
})
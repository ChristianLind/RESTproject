const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Importing routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Homepage');
});

//Connecting to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('Connected to the DB')
);

//Listening to the server
app.listen(3000);
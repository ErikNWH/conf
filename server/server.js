const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const dbConfig = require('./config/secret')

const app = express();

const PORT = 3000;
const host = `http://localhost:${PORT}`;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, { useNewUrlParser: true});

/**
 * middleware
 */
const auth = require('./routes/authRoutes')

app.use('/api/website', auth);

app.listen(PORT, () => {
    console.log(`Running on ${host}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const mongoDb = require('./mongoose');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.post('/userlist', mongoDb.addNewUserToList);
app.get('/userlist', mongoDb.getUsersList);


app.listen(5000);
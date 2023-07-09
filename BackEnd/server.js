const express = require('express');
const bodyParser = require('body-parser');
const mongoDb = require('./mongoose');

const app = express();

app.use(bodyParser.json());

app.post('/userlist', mongoDb.addNewUserToList);
app.get('/userlist', mongoDb.getUsersList);


app.listen(5000);
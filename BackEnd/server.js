import express from 'express';
import bodyParser from 'body-parser';
import { addNewUserToList, getUsersList } from "./mongooseDb.js";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.get('/', (req, res, next) => {
    console.log('It works!');
    res.json('It works');
    next();
})

app.post('/userlist', addNewUserToList);
app.get('/userlist', getUsersList);

app.listen(5000);
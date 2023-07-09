import express from 'express';
import bodyParser from 'body-parser';
import { addNewUserToList, getUsersList } from "./mongooseDb.js";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.post('/userlist', addNewUserToList);
app.get('/userlist', getUsersList);

mongoose
    .connect('mongodb+srv://devAccess:hYek6STLeeNtXpI1@mernapp.5svekii.mongodb.net/DbSample?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err)
    });
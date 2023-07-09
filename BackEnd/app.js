import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import { router as usersRoutes } from "./routes/users-routes.js";

const app = express();

//declare your routes here
app.use(usersRoutes);

app.use(bodyParser.json());

//this fix cors errors.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});



//db conn
mongoose
    .connect('mongodb+srv://devAccess:hYek6STLeeNtXpI1@mernapp.5svekii.mongodb.net/DbSample?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err)
    });
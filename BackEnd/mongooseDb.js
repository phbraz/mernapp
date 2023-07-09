import mongoose from 'mongoose';
import { UserList } from "./models/userlist.js";

mongoose.connect('mongodb+srv://devAccess:hYek6STLeeNtXpI1@mernapp.5svekii.mongodb.net/DbSample?retryWrites=true&w=majority'); //you can find this on Atlas.

const addNewUserToList = async (req, res, next) => {
    const addUser = new UserList({
        UserName: req.body.UserName,
        PlaceCount: req.body.PlaceCount
    });

    const result = addUser.save();

    res.json(result);
};


const getUsersList = async (req, res, next) => {
    const usersList = await UserList.find().exec();
    res.json(usersList);
}


export { addNewUserToList, getUsersList }


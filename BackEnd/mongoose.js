const mongoose= require('mongoose');

const UserListModel = require('./models/userlist');

mongoose.connect('mongodb+srv://devAccess:hYek6STLeeNtXpI1@mernapp.5svekii.mongodb.net/DbSample?retryWrites=true&w=majority');

const addNewUserToList = async (req, res, next) => {
    const addedUser = new UserListModel({
        UserName: req.body.UserName,
        PlaceCount: req.body.PlaceCount
    });

    const result = addedUser.save();

    res.json(result);
};

const getUsersList = async (req, res, next) => {
    const usersList = await UserListModel.find().exec();
    res.json(usersList);
};

exports.addNewUserToList = addNewUserToList;
exports.getUsersList = getUsersList;
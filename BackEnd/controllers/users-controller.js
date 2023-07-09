import { UserList } from "../models/userlist.js";

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
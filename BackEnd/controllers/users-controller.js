import { UserList } from "../models/userlist.js";
import { User } from "../models/user.js";
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';

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

const createUserLogin = (req, res, next) => {
    const { firstname, lastname, email, username, password  } = req.body;

    //check for existing users
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({error: 'Email already exists'});
            }

            //create new user obj from our schema
            const newUser = new User({ firstname, lastname, email, username, password });

            //hash pass
            bcrypt.hash(newUser.password, 10)
                .then(hashedPass => {
                    newUser.password = hashedPass;

                    //save to db
                    newUser.save()
                        .then(savedUser => {
                            res.status(201).json({message: 'User has been registered successfully'})
                        })
                        .catch(err => {
                            res.status(500).json({message: 'Failed to register user'})
                        });
                });
        });
}

const loginUser = (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({email})
        .then(user => {
            if (!user) {
                return res.status(401).json({message: 'User not found'})
            }

            //compare pass
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) {
                        return res.status(401).json({error: 'Invalid credentials'});
                    }

                    //generate jwt

                    const token = jwt.sign(
                        {userId: user._id, email: user.email },
                        'secret-super-key',
                        {expiresIn: '1h'}
                    );

                    res.status(200).json({ token });
                });
        });
}


export { addNewUserToList, getUsersList, createUserLogin, loginUser }
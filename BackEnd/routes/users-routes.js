import express from "express";
import {
    addNewUserToList,
    createUserLogin,
    getUsersList,
    loginUser,
} from "../controllers/users-controller.js";
import { validateToken } from "../middleware/check-auth.js";

const router = express.Router();

//Auth
router.post('/account/register', createUserLogin);
router.post('/account/login', loginUser);

//the middleware above is validating the token, if it's not valid users cannot get access to the routes below.
router.get('/userlist', validateToken, getUsersList);
router.post('/userlist', validateToken ,addNewUserToList);

export { router }
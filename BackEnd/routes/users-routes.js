import express from "express";
import {addNewUserToList, createUserLogin, getUsersList, loginUser} from "../controllers/users-controller.js";

const router = express.Router();

router.get('/userlist', getUsersList);
router.post('/userlist', addNewUserToList);

//auth
router.post('/account/register', createUserLogin);
router.post('/account/login', loginUser)

export { router }
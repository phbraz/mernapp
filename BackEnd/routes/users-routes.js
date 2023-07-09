import express from "express";
import { addNewUserToList, getUsersList } from "../controllers/users-controller.js";

const router = express.Router();

router.get('/userlist', getUsersList);
router.post('/userlist', addNewUserToList);

export { router }
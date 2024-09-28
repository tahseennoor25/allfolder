import express from "express";
import postUser from "./post.js";
import getUsers from "./get.js";
import deleteUser from "./delete.js";
const router = express.Router();

router.post('/', postUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
export default router;
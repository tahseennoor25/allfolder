import { Router } from "express";
// import { get } from "mongoose";
import get from "./controllers/get.js";
import post from "./controllers/post.js";

const router = Router();

router.get("/", get);
router.post("/", post)

export default router;
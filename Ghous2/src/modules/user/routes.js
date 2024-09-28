import { Router } from "express";
import getController from "./controller/get.js";
import deleteController from "./controller/delete.js";
import postController from "./controller/post.js";
import updateController from "./controller/update.js";

const router = Router();

router.get("/", getController);
router.post("/", postController);
router.delete("/:id", deleteController);
router.put("/:id", updateController)


export default router;
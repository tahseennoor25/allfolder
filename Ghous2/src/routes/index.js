import { Router } from "express";
import useRoutes from "../modules/user/routes.js";
import productRoutes from "../modules/product/routes.js";
const router = Router();

router.use("/user", useRoutes);
router.use("/product", productRoutes);


export default router;
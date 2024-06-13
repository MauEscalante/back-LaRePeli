import { Router } from "express";
import { getUser, updateUserById} from "../controller/user.controller.js";

const router = Router();

router.get("/:userId", getUser);

router.put("/:userId", updateUserById);

export default router;
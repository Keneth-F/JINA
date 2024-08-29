import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyToken,
} from "./auth.controller.js";
import { auth } from "../../middlewares/index.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify", auth, verifyToken);
router.post("/logout", auth, logout);

export default router;
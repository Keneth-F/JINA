import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyToken,
} from "./auth.controller.js";
import { auth } from "../../middlewares/index.js";

const router = Router();

/**
* @api {POST} /register registrarse 
* @apiName register
* @apiGroup Auth
* @apiDescription registro en la app
* 
* 
* @apiSuccess {String} envia estado 200
* 
* @apiError {Text} mensaje con el error
* 
*/
router.post("/register", register);
/**
* @api {POST} /login ingresa como usuario registrado
* @apiName login
* @apiGroup Auth
* @apiDescription Una vez registrado se puede iniciar sesion
* 
* 
* @apiSuccess {String} envia estado 200
* 
* @apiSuccess {String} envia estado 200
* 
* @apiError {Text} mensaje con el error
* 
*/
router.post("/login", login);
router.get("/verify", auth, verifyToken);
router.post("/logout", auth, logout);

export default router;
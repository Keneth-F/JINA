import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/index.js";

export const auth = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token)
      throw { message: "No token, authorization denied", status: 401 }
    const user = jwt.verify(token, TOKEN_SECRET)
    req.user = user;
    return next();
  } catch (error) {
    return next(error)
  }
};
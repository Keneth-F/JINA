import { User } from "./user.model.js";
import { createAccessToken } from "../../utils/index.js";

export const register = ({ body }, res, next) => User
  .signUp(body)
  .then((user) => createAccessToken(user))
  .then((token) => {
    return res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    }).sendStatus(200)
  }
  )
  .catch(({ message, status }) => next({ message, status }))

export const login = ({ body }, res, next) => User
  .signIn(body)
  .then((user) => createAccessToken(user))
  .then((token) => {
    console.log(token)
    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    }).sendStatus(200)
  }
  )
  .catch(({ message, status }) => next({ message, status }))

export const verifyToken = (req, res) => res.json(req.user)

export const logout = ({ body, user }, res, next) => User
  .signOut(user)
  .then(() =>
    res.clearCookie("token").sendStatus(200)
  )
  .catch(({ message, status }) => next({ message, status }))

import { User } from "./user.model.js";
import { createAccessToken } from "../../utils/index.js";

export const register = ({ body }, res, next) => User
  .signUp(body)
  .then((data) => createAccessToken(data))
  .then((token) =>
    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    }).json({ data })
  )
  .catch(error => next({ message: `Error interno del servidor: ${error}` }))

export const login = ({ body }, res, next) => User
  .signIn(body)
  .then((user) => createAccessToken(user))
  .then((token) => res.cookie("token", token, {
    httpOnly: process.env.NODE_ENV !== "development",
    secure: true,
    sameSite: "none",
  }).status(200)
  )
  .catch(({ message, status }) => next({ message, status }))

export const verifyToken = (req, res) => res.json(req.user)

export const logout = ({ body }, res, next) => User
  .signOut(body)
  .then((data) => createAccessToken(data))
  .then((token) =>
    res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
    }).sendStatus(200)
  )
  .catch(({ message, status }) => next({ message, status }))

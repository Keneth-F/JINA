import { User } from "./user.model.js";
import { createAccessToken } from "../../utils/index.js";

export const register = ({ body }, res, next) => User
  .signUp(body)
  .then((user) => createAccessToken(user))
  .then((token) => {
    return res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == 'production',
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24
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
      httpOnly: true,
      secure: process.env.NODE_ENV == 'production',
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24
    }).sendStatus(200)
  }
  )
  .catch(({ message, status }) => next({ message, status }))

export const verifyToken = ({ user }, res, next) => User
  .verifyUser(user)
  .then(() =>
    res.json(user)
  )
  .catch(({ message, status }) => next({ message, status }))

export const logout = ({ body, user }, res, next) => User
  .signOut(user)
  .then(() =>
    res.clearCookie("token").sendStatus(200)
  )
  .catch(({ message, status }) => next({ message, status }))

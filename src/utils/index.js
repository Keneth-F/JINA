import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/index.js";

export async function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}


const labels = [
  {
    text: "high",
    bgColor: 'bg-error'
  },
  {
    text: "medium",
    bgColor: 'bg-warning'
  },
  {
    text: "normal",
    bgColor: 'bg-success'
  },
  {
    text: "low",
    bgColor: 'bg-info'
  }]
export const selectedLabel = (text) => labels.find((lbl) => lbl.text = text)
export const selectRandomLabel = () => labels[Math.floor(Math.random() * labels.length)]
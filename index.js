// import nodemailer from 'nodemailer'
// import { Client } from 'whatsapp-web.js'
// import qrcode from 'qrcode-terminal'

// // Create a new client instance
// const client = new Client();

// // When the client is ready, run this code (only once)
// client.once('ready', () => {
//   console.log('Client is ready!');
// });

// // When the client received QR-Code
// client.on('qr', (qr) => {
//   console.log('QR RECEIVED', qr);
//   qrcode.generate(qr, { small: true });
// });

// // Listening to all incoming messages
// client.on('message_create', message => {
//   console.log(message.body);
//   if (message.body === '!ping') {
//     // send back "pong" to the chat the message was sent in
//     client.sendMessage(message.from, 'pong');
//     // reply back "pong" directly to the message
//     message.reply('pong');
//   }
// });

// // Start your client
// client.initialize();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "notificacionestiendapaula@gmail.com",
//     pass: "wainiddtcvmjhvtf"
//   }
// })
// transporter.sendMail({
//   from: "notificacionestiendapaula@gmail.com",
//   to: "kenethfg123@gmail.com",
//   subject: "TEST EMAIL",
//   text: "this is a test email"
// }, (err, info) => {
//   if (err) {
//     return console.log({ err })
//   }
//   return console.log({ info })
// })
import express from "express"
import morgan from 'morgan'
import cookieParser from "cookie-parser";

import projectsRouter from './src/modules/projects/projects.routes.js'
import scenesRouter from './src/modules/scenes/scenes.routes.js'
import ticketsRouter from './src/modules/tickets/tickets.routes.js'
import authRoutes from './src/modules/auth/auth.routes.js'
import { PORT } from "./src/config/index.js";
import { auth } from "./src/middlewares/index.js";

const app = express()
const port = PORT;
app.use(cookieParser());
app.use(express.static("public"))
app.use(express.json())

app.use(morgan('tiny'))
app.use("/auth", authRoutes);
app.use(auth)
app.use("/project", projectsRouter)
app.use("/scene", scenesRouter)
app.use("/ticket", ticketsRouter)

app.all('*', (_, __, next) => { return next({ message: 'No existe la ruta', status: 404 }) })
app.use(({ message, status }, _, res, __) => res.status(status || 500).json({ message }))
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
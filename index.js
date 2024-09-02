import express from "express"
import morgan from 'morgan'
import cookieParser from "cookie-parser";

import projectsRouter from './src/modules/projects/projects.routes.js'
import scenesRouter from './src/modules/scenes/scenes.routes.js'
import ticketsRouter from './src/modules/tickets/tickets.routes.js'
import authRoutes from './src/modules/auth/auth.routes.js'
import { PORT } from "./src/config/index.js";
import { auth } from "./src/middlewares/index.js";

// import { Marketing } from "./src/modules/marketing/marketing.model.js";

const app = express()
const port = PORT;
app.use(cookieParser());
app.use(express.static("public"))
app.use(express.json())

app.use(morgan('tiny'))
// app.post("/send-message", (req, res, next) => Marketing.createMessage(req.body).then(res.json).catch(next))
// app.post("/send-email", (req, res, next) => Marketing.createEmail(req.body).then(res.json).catch(next))
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
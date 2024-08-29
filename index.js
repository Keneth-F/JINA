import express from "express"
import cookieParser from "cookie-parser";

import ticketsRouter from './src/modules/tickets/tickets.routes.js'
import authRoutes from './src/modules/auth/auth.routes.js'
import { PORT } from "./src/config/index.js";

const app = express()
const port = PORT;
app.use(cookieParser());
app.use(express.static("public"))
app.use(express.json())

app.use("/auth", authRoutes);
app.use("/ticket", ticketsRouter)

app.all('*', (_, __, next) => next({ status: 404, message: 'No existe la ruta' }))
app.use(({ message, status }, _, res, __) => res.status(status || 500).json({ message }))
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
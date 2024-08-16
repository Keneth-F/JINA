import express from "express"
import ticketsRouter from './modules/tickets/tickets.routes.js'
const app = express()
const port = 3000;
app.use(express.json())
app.use(express.stataic("public"))
app.use("/ticket", ticketsRouter)

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
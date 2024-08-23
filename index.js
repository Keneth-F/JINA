import express from "express"
import ticketsRouter from './src/modules/tickets/tickets.routes.js'
const app = express()
const port = 3000;
app.use(express.static("public"))
app.use(express.json())
app.use("/ticket", ticketsRouter)
app.all('*', (req, res,) => {
  return res.status(404).json({ message: 'No existe la ruta' })
})
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
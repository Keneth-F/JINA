import express from "express"
import tasksRouter from './modules/tasks/tasks.routes.js'
const app = express()
const port = 3000;
app.use(express.json())
app.use("/tasks", tasksRouter)
app.all('*', (req, res,) => {
  return res.status(404).json({ message: 'No existe la ruta' })
})
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
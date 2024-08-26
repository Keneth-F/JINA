import express from "express"
import ticketsRouter from './src/modules/tickets/tickets.routes.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000;
app.use(express.static("public"))
app.use(express.json())
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'projects', 'index.html'));
});
app.get('/projects/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'projects', 'project.html'));
});
app.use("/ticket", ticketsRouter)
app.all('*', (req, res,) => {
  return res.status(404).json({ message: 'No existe la ruta' })
})
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
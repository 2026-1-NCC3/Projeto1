import express from "express";
import cors from "cors";
import { ValidarCadastroPaciente } from "./controller/controller_usuarios.ts";

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.post("/cadastrarPaciente", async (req, res) => {
    let data = req.body

    let cadastrarPaciente = await ValidarCadastroPaciente(data)

    res.status(cadastrarPaciente.status)
    res.json(cadastrarPaciente)
})

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
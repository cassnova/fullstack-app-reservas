import express from "express";
import connectBD from "./config/db.js";

const app = express();

connectBD();

app.use("/", (req, res) => {
  res.send("Hola mundo");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}...`);
});

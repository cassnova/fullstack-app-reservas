import express from "express";
import dotenv from "dotenv";
import connectBD from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";

const app = express();
dotenv.config();

connectBD();

app.use("/api/veterinarios", veterinarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}...`);
});

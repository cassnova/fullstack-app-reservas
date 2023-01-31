import express from "express";
const router = express.Router();
import {
  register,
  profile,
  confirmar,
  autenticar,
} from "../controllers/veterinarioController.js";

router.post("/", register);

router.get("/perfil", profile);

router.get("/confirmar/:token", confirmar);

router.post("/login", autenticar);

export default router;

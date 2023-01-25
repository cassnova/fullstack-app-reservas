import express from "express";
const router = express.Router();
import {
  register,
  profile,
  confirmar,
} from "../controllers/veterinarioController.js";

router.post("/", register);

router.get("/perfil", profile);

router.get("/confirmar/:token", confirmar);

export default router;

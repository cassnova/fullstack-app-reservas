import express from "express";
const router = express.Router();
import {
  register,
  profile,
  confirmar,
  autenticar,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

router.post("/", register);

router.get("/confirmar/:token", confirmar);

router.post("/login", autenticar);

router.get("/perfil", checkAuth, profile);

export default router;

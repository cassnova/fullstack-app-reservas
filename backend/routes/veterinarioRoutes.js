import express from "express";
const router = express.Router();
import {
  register,
  profile,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

// Area publica
router.post("/", register);

router.get("/confirmar/:token", confirmar);

router.post("/login", autenticar);

router.post("/olvide-password", olvidePassword);

router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Area privada
router.get("/perfil", checkAuth, profile);

export default router;

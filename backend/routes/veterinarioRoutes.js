import express from "express";
const router = express.Router();
import { register, profile } from "../controllers/veterinarioController.js";

router.get("/", register);

router.get("/perfil", profile);

export default router;

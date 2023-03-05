import express from "express";
import { getUsuario,registrarUsuario,autenticar } from "../controller/usuarioController.js";


const router = express.Router();
router.get("/",getUsuario);
router.post("/add-user", registrarUsuario);

// rutas de autenticacion
router.post('/autenticar', autenticar);

export default router;
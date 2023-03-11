import express from "express";
import { getUsuario,registrarUsuario,autenticar,confirmar } from "../controller/usuarioController.js";


const router = express.Router();
router.get("/",getUsuario);
router.post("/add-user", registrarUsuario);

// rutas de autenticacion
router.post('/autenticar', autenticar);
router.get('/confirmar/:token', confirmar);

export default router;
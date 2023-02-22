import express from "express";
import { getUsuario,registrarUsuario } from "../controller/usuarioController.js";


const router = express.Router();
router.get("/",getUsuario);
router.post("/add-user", registrarUsuario);


export default router;
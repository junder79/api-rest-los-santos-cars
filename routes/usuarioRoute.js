import express from "express";
import { getUsuario,registrarUsuario,autenticar,confirmar,olvidePassword,comprobarToken,nuevoPassword } from "../controller/usuarioController.js";


const router = express.Router();
router.get("/",getUsuario);
router.post("/add-user", registrarUsuario);

// rutas de autenticacion
router.post('/autenticar', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password',olvidePassword);

router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);
export default router;
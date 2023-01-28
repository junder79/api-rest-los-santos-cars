import  express  from "express";
import { registrarCategoria, getCategorias } from "../controller/categoriaController.js";

const router = express.Router();

router.post("/nuevaCategoria", registrarCategoria);
router.get("/categorias",getCategorias);


export default router;

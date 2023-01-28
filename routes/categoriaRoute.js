import express from "express";
import { registrarCategoria, getCategorias, getSpecificCategoria } from "../controller/categoriaController.js";

const router = express.Router();

router.post("/nuevaCategoria", registrarCategoria);
router.get("/", getCategorias);
router.get("/:categoria", getSpecificCategoria);

export default router;
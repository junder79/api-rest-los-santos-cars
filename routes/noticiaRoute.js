import express from 'express';
import { getNoticias,registrarNoticia } from '../controller/noticiaController.js';

const router = express.Router();

router.post("/nuevaNoticia", registrarNoticia);
router.get("/", getNoticias);

export default router;
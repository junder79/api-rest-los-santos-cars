import express from 'express';
import { registrarVehiculo, getVehiculos, getTipoVehiculo, getSpecificVehicle } from '../controller/vehiculoController.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("from api_usuarios");
});

router.get("/getVehiculos", getVehiculos);
router.get("/getVehiculos/:idVehiculo", getSpecificVehicle);

router.post("/registro", registrarVehiculo);

router.get("/getSpecificType/:tipoVehiculo", getTipoVehiculo)

export default router;
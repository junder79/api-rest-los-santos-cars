import express from 'express';
import { registrarVehiculo, getVehiculos, getTipoVehiculo, getSpecificVehicle,updateSpecificVehicle } from '../controller/vehiculoController.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("from api_usuarios");
});

router.get("/getVehiculos", getVehiculos);
router.get("/getVehiculos/:idVehiculo", getSpecificVehicle);

router.post("/registro", registrarVehiculo);

router.get("/getSpecificType/:tipoVehiculo", getTipoVehiculo)

//Update Specific Vehicle 

router.put("/updateVehiculo/:idVehiculo", updateSpecificVehicle);

export default router;
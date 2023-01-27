//Se importan los modelos 

import Vehiculo from "../models/Vehiculo.js";

const registrarVehiculo = async(req, res) => {

    try {
        const vehiculo = new Vehiculo(req.body);
        const vehiculoAlmacenado = await vehiculo.save();
        res.json({ status: 200, message: 'Vehiculo Ingresado Correctamente' });
    } catch (error) {
        res.json({ status: 400, message: 'Error al ingresar vehiculo'});
    }
}

const getVehiculos = async(req, res) => {
    try {
        const vehiculos = await Vehiculo.find();
        res.json(vehiculos);
    } catch (error) {
        res.json({ status: 400, message: 'Error al obtener información ' });
    }
}

const getTipoVehiculo = async(req, res) => {
    try {
        const tipoVehiculo = req.params.tipoVehiculo;
        const getSpecificType = await Vehiculo.find().where("tipoVehiculo").equals(tipoVehiculo);
        res.json(getSpecificType);
    } catch (error) {
        res.json({ status: 400, message: 'Error al obtener información ' });
    }
}


const getSpecificVehicle = async(req, res) => {
    try {
        const idVehiculo = req.params.idVehiculo;
        const getSpecificType = await Vehiculo.find().where("_id").equals(idVehiculo);
        res.json(getSpecificType);
    } catch (error) {
        res.json({ status: 400, message: 'Error al obtener información ' });
    }
}

const updateSpecificVehicle = async (req, res) =>{
    try {
        const {idVehiculo} = req.params.idVehiculo;
        const {nombre,imagen,marca,descripcion,tipoVehiculo,resistencia,velocidad} = req.body;
        const updateSpecificVehicle = await Vehiculo.updateOne({_id:idVehiculo},{$set:{nombre,imagen,marca,descripcion,tipoVehiculo,resistencia,velocidad}});
    } catch (error) {
        res.json({ status: 400, message: 'Error al actualizar vehiculo' });    
    }
}



export { registrarVehiculo, getVehiculos, getTipoVehiculo, getSpecificVehicle , updateSpecificVehicle};
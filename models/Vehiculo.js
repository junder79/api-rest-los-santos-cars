import mongoose from "mongoose";

const vehiculoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    tipoVehiculo: {
        type: String,
        required: true,
    },
    resistencia: {
        type: String,
        required: true,
    },
    velocidad: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);
export default Vehiculo;
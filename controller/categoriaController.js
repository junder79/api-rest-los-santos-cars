import Categoria from "../models/Categoria.js";
import Vehiculo from "../models/Vehiculo.js";


const registrarCategoria = async(req, res) => {
    try {
        const categoria = new Categoria(req.body);
        const categoriaAlmacenado = categoria.save();
        res.json({ status: 200, message: 'Categoria registrada' });
    } catch (error) {
        res.json({ status: 400, message: 'Error al registrar las categorias' });
    }
}

const getCategorias = async(req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.json({ status: 400, message: 'Error al obtener las categorias' });
    }
}

const getSpecificCategoria = async(req, res) => {
    try {
        const categoriaSpecifica = req.params.categoria;
        const vehiculosSpecificCategory = await Vehiculo.find().where("categoria").equals(categoriaSpecifica);
        res.json(vehiculosSpecificCategory);
    } catch (error) {
        res.json({ status: 400, message: 'Error al obtener la categoria espcificada', error });
    }
}


export { registrarCategoria, getCategorias, getSpecificCategoria };
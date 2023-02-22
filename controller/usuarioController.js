import Usuario from "../models/Usuario.js";


const getUsuario = async  (req,res) => {
    res.json({ status: 200, message: 'Usuarios Working!'});
}

const registrarUsuario = async (req,res) => {

    const {email} = req.body;
    const existeUsuario = await Usuario.findOne({email:email});
    if(existeUsuario){
        return res.status(400).json({msg:"Usuario ya registrado"});
    }
    try {
        const usuario = new Usuario(req.body);
        const usuarioAlmacenado = await usuario.save();
        res.json({ status: 200, message: 'usuario agregado' });
    } catch (error) {
       
        return res.status(400).json({msg:error});
    }
}

export {getUsuario,registrarUsuario};
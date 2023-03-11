import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";


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
        usuario.token = generarId();
        const usuarioAlmacenado = await usuario.save();
        res.json({ status: 200, message: 'usuario agregado' });
    } catch (error) {
        console.log('error al  agregado',error);
        return res.status(400).json({msg:error});
    }
}

const autenticar = async (req, res) => {
   
    const {email, password} = req.body;
    // comprobar de que usuario exista  
    const usuario = await Usuario.findOne({ email })
    if(!usuario){
        return res.status(400).json({msg:'Usuario no encontrado'}); 
    }

    // comprobar de que usuario este confirmado
    if(!usuario.confirmado){
        return res.status(403).json({msg:'tu cuenta no ha sido confirmada'}); 
    }

    // comprobar el password 
    if(!await usuario.comprobarPassword(password)){
        return res.status(400).json({msg:'Password incorrecta'}); 
    }

    return res.status(200).json({nombre: usuario.nombre, id : usuario._id , token:generarJWT(usuario.nombre,usuario._id)}); 
} 


const confirmar = async (req, res) => {
    const {token} = req.params;
    const usuarioConfirma = await Usuario.findOne({token});
    if(!usuarioConfirma){
        return res.status(400).json({msg:'Token no válido'}); 
    }
    return res.status(200).json(usuarioConfirma); 
}
export {getUsuario,registrarUsuario,autenticar,confirmar};